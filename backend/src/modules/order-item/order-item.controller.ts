import { orderitems, products } from '@prisma/client';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { OrderItemService } from './order-item.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateOrderItemDto,
  OrderItemDto,
  UpdateOrderItemDto,
} from './dto/orderItem.dto';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Get('getOrderItem/:id')
  @ApiParam({ name: 'id', description: 'getOrderItem by id user' })
  @ApiResponse({
    status: 200,
    description: 'get order-item by id',
    type: [OrderItemDto],
  })
  async getOrderItem(@Param('id') id: number): Promise<OrderItemDto[]> {
    const getOrderItem = await this.orderItemService.getOrderItem(id);
    return getOrderItem;
  }

  @Post('postOrderItem')
  @ApiCreatedResponse({ description: 'post order item' })
  @ApiBody({ description: 'create order', type: CreateOrderItemDto })
  async postOrderItem(@Body() data: CreateOrderItemDto): Promise<orderitems> {
    const createOrderItem = await this.orderItemService.postOrderItem(data);
    return createOrderItem;
  }

  @Put('updateOrderItem/:id')
  @ApiParam({ name: 'id', description: 'update order item by id' })
  @ApiResponse({
    status: 200,
    description: 'update order-item by id',
    type: UpdateOrderItemDto,
  })
  @ApiBody({ description: 'update order-item by id', type: UpdateOrderItemDto })
  async updateOrderItem(
    @Param('id') id: number,
    @Body() data: UpdateOrderItemDto,
  ): Promise<orderitems> {
    const updateOrderItem = await this.orderItemService.updateOrderItem(
      id,
      data,
    );
    return updateOrderItem;
  }

  @Delete('delOrderItem/:id')
  @ApiParam({ name: 'id', description: 'delOrderItem by id' })
  @ApiResponse({
    status: 200,
    description: 'remove order item by id',
    type: String,
  })
  async delOrderItem(@Param('id') id: number): Promise<String> {
    await this.orderItemService.delOrderItem(id);
    return 'del successfully!';
  }
}
