import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    JwtModule.register({
      secret: `${jwtConstants.secret}`,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtService],
})
export class AuthModule {}
