import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async create(@Body() user: User): Promise<User> {
    try {
      return await this.authService.create(user);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  findOne(@Body() user: User): Promise<User> {
    try {
      return this.authService.findUser(user.email, user.password);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  async replaceUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: Partial<User>,
  ) {
    await this.authService.updateUser(id, user, 'PUT');
    return { message: 'Данные обновлены', status: 200 };
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: Partial<User>,
  ) {
    await this.authService.updateUser(id, user, 'PATCH');
    return { message: 'Данные обновлены', status: 200 };
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<{ message: string; status: number }> {
    const result = await this.authService.remove(+id);
    if (result.success) {
      return { message: 'Пользователь успешно удален', status: 201 };
    } else {
      throw new BadRequestException('Пользователь не найден');
    }
  }
}
