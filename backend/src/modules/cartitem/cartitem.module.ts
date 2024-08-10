import { Module } from '@nestjs/common';
import { CartitemController } from './cartitem.controller';
import { CartitemService } from './cartitem.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CartitemController],
  providers: [CartitemService, PrismaService],
})
export class CartitemModule {}
