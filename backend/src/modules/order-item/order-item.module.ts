import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';

@Module({
  controllers: [OrderItemController],
  providers: [OrderItemService, PrismaService],
})
export class OrderItemModule {}
