import { Injectable } from '@nestjs/common';
import { orders } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto, OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getOrder(id: number): Promise<OrderDto[]> {}

  async postOrder(data: CreateOrderDto): Promise<orders> {}
}
