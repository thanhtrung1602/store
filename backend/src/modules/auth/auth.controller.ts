import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { users } from '@prisma/client';
import { LoginDto, RegisterDto } from './dto/auth.model';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

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
    try {
      const register = await this.authService.register(registerDto);
      return register;
    } catch (error) {
      throw error;
    }
  }

  @Post('login')
  @ApiCreatedResponse({
    description: 'login',
  })
  @ApiBody({
    type: LoginDto,
  })
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const loginResponse = await this.authService.login(loginDto);

      const { accessToken } = loginResponse;

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(HttpStatus.OK).json(loginResponse);
    } catch (error) {
      throw error;
    }
  }

  @Post('refreshToken')
  async refreshToken(
    @Body() body: { refreshToken: string },
    @Res() res: Response,
  ) {
    try {
      const { refreshToken } = body;
      const newAccessToken = await this.authService.refresh(refreshToken);

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(HttpStatus.OK).json({ accessToken: newAccessToken });
    } catch (error) {
      throw error;
    }
  }

  getCookieToken(@Req() req: Request, @Res() res: Response) {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return res.status(404).json('not found token!');
    }
    return res.status(HttpStatus.OK).json(accessToken);
  }
}
