import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { users } from '@prisma/client';
import { LoginDto, RegisterDto } from './dto/auth.model';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({
    description: 'register',
  })
  @ApiBody({
    type: RegisterDto,
  })
  async register(@Body() registerDto: RegisterDto): Promise<users> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiCreatedResponse({
    description: 'login',
  })
  @ApiBody({
    type: LoginDto,
  })
  async login(@Body() loginDto: LoginDto): Promise<users> {
    return this.authService.login(loginDto);
  }
}
