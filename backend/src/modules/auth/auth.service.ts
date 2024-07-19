import { PrismaService } from './../../prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.model';
import { users } from '@prisma/client';
import { compare, hash } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  register = async (body: RegisterDto): Promise<users> => {
    const user = await this.prismaService.users.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user) {
      throw new HttpException(
        { message: 'This email has been used. ' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await hash(body.password, 10);

    const res = this.prismaService.users.create({
      data: { ...body, password: hashPassword },
    });

    return res;
  };
  login = async (body: LoginDto): Promise<users> => {
    const user = await this.prismaService.users.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new HttpException(
        { message: 'Account is not exits. ' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const verify = await compare(body.password, user.password);

    if (!verify) {
      throw new HttpException(
        { message: 'Password doese not correct. ' },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  };
}
