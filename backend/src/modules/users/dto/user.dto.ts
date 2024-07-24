import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class UsersDto {
  @ApiProperty()
  @IsNumber()
  user_id?: number;

  @ApiProperty()
  @IsString()
  username?: string;

  @ApiProperty()
  @IsString()
  email?: string;

  @ApiProperty()
  @IsString()
  full_name?: string;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty({
    enum: ['Admin', 'User'],
  })
  role?: UserRole;
}
