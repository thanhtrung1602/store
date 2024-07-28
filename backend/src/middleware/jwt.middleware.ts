import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { jwtConstants } from 'src/modules/auth/constants';

@Injectable()
class JwtMiddleWare implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token =
      authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;

    if (token == null) return res.status(401).json('invalid token');
    try {
      this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      next();
    } catch (error) {
      return res
        .status(403)
        .json({ message: 'Forbidden', error: error.message });
    }
  }
}

export default JwtMiddleWare;
