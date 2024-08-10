import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, OrderDto } from './dto/order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('getOrder/:id')
  async getOrder(@Param('id') id: number): Promise<OrderDto[]> {
    return this.ordersService.getOrder(id);
  }

  @Post('postOrder')
  async postOrder(@Body() data: CreateOrderDto): Promise<OrderDto> {
    return this.ordersService.postOrder(data);
  }
}
