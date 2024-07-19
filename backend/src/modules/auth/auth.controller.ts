import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { users } from '@prisma/client';
import { LoginDto, RegisterDto } from './dto/auth.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<users> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<users> {
    return this.authService.login(loginDto);
  }
}
