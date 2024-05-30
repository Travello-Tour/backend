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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @ApiOperation({ summary: 'Регистрация нового пользователя' })
  async create(@Body() user: User) {
    return await this.authService.create(user);
  }

  @Post('login')
  @ApiOperation({ summary: 'Авторизация пользователя' })
  async auth(@Body() authDto: AuthDto): Promise<User> {
    return await this.authService.findUser(authDto.email, authDto.password);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Полное обновление данных пользователя' })
  async replaceUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: Partial<User>,
  ) {
    await this.authService.updateUser(id, user, 'PUT');
    return { message: 'Данные обновлены', status: 200 };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Частичное обновление данных пользователя' })
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: Partial<User>,
  ) {
    await this.authService.updateUser(id, user, 'PATCH');
    return { message: 'Данные обновлены', status: 200 };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить аккаунт' })
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
