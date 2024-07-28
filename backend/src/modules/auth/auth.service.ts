import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../../prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto, LoginResponseDto, RegisterDto } from './dto/auth.model';
import { users } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { jwtConstants } from './constants';
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  register = async (body: RegisterDto): Promise<users> => {
    try {
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
    } catch (error) {
      throw error;
    }
  };

  async login(body: LoginDto): Promise<LoginResponseDto> {
    try {
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

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...other } = user;

      const payload = {
        userId: user.user_id,
      };

      const accessToken: string = this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn,
      });

      const refreshToken: string = this.jwtService.sign(payload, {
        secret: jwtConstants.secretToken,
        expiresIn: jwtConstants.expiressInFresh,
      });

      const expiresIn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      await this.prismaService.refreshtoken.create({
        data: {
          token: refreshToken,
          user_id: user.user_id,
          expiresin: expiresIn,
        },
      });

      return { accessToken, refreshToken, other };
    } catch (error) {
      throw error;
    }
  }

  async refresh(refreshToken: string) {
    try {
      const { user_id } = this.jwtService.verify(refreshToken, {
        secret: jwtConstants.secretToken,
      });

      const tokenRecord = await this.prismaService.refreshtoken.findFirst({
        where: {
          token: refreshToken,
        },
      });

      if (!tokenRecord) {
        throw new HttpException(
          'Invalid refresh token.',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const newPayload = { user_id };
      const newAccessToken = this.jwtService.sign(newPayload, {
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn,
      });

      return newAccessToken;
    } catch (error) {
      throw error;
    }
  }
}
