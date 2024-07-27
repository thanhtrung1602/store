import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, OrderDto } from './dto/order.dto';
import { orders } from '@prisma/client';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // @Get('getOrder')
  // async getOrder(id: number): Promise<OrderDto[]> {}

  // async postOrder(data: CreateOrderDto): Promise<orders> {}
}
