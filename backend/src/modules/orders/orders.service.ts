import { Injectable } from '@nestjs/common';
import { orders } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto, OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getOrder(id: number): Promise<OrderDto[]> {
    return this.prismaService.orders.findMany({
      where: { order_id: id },
    });
  }

  async postOrder(data: CreateOrderDto): Promise<OrderDto> {
    const createdOrder = await this.prismaService.orders.create({
      data: {
        user_id: data.user_id,
        total: data.total,
        status: data.status,
      },
    });

    return {
      order_id: createdOrder.order_id,
      user_id: createdOrder.user_id,
      total: createdOrder.total,
      status: createdOrder.status,
      created_at: createdOrder.created_at,
    };
  }
}
