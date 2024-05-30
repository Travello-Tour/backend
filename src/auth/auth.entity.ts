import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  
  @ApiProperty()
  @Column()
  public username: string;

  @ApiProperty()
  @Column()
  public email: string;

  @ApiProperty()
  @Column()
  public password: string;
}
