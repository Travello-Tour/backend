import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'email пользователя',
  })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Пароль пользователя' })
  password: string;
}
