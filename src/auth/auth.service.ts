import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { User } from './auth.entity';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new HttpException(
        'Пользователь уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.password = await bcrypt.hash(user.password, 10);
    await this.usersRepository.save(user);
    delete user.password;
    return user;
  }

  async findUser(email: string, password: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new HttpException(
        'Неверный пароль или логин',
        HttpStatus.BAD_REQUEST,
      );
    }
    delete user.password;
    return user;
  }

  async updateUser(
    id: number,
    user: Partial<User>,
    method: 'PUT' | 'PATCH' = 'PATCH',
  ): Promise<void> {
    const existingUser = await this.usersRepository.findOne({ where: { id } });
    if (!existingUser) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    if (user.email) {
      const newEmail = await this.usersRepository.findOne({
        where: { email: user.email },
      });
      if (newEmail) {
        throw new HttpException(
          'Пользователь с таким email уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (method === 'PATCH') {
      await this.usersRepository.update(id, user);
    } else if (method === 'PUT') {
      const updatedUser = {
        ...existingUser,
        ...user,
        id,
      };
      await this.usersRepository.save(updatedUser);
    } else {
      throw new Error(`Unsupported update method: ${method}`);
    }
  }

  async remove(id: number): Promise<{ success: boolean }> {
    const result = await this.usersRepository.delete(id);
    return { success: result.affected > 0 };
  }
}
