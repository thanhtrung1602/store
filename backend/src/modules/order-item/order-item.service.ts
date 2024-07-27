import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CreateOrderItemDto,
  OrderItemDto,
  UpdateOrderItemDto,
} from './dto/orderItem.dto';
import { orderitems } from '@prisma/client';

@Injectable()
export class OrderItemService {
  constructor(private readonly prismaService: PrismaService) {}
  async getOrderItem(id: number): Promise<OrderItemDto[]> {
    const getOrderItem = await this.prismaService.orderitems.findMany({
      where: {
        user_id: id,
      },
    });

    return getOrderItem;
  }

  async postOrderItem(data: CreateOrderItemDto): Promise<orderitems> {
    const createOrderItem = await this.prismaService.orderitems.create({
      data,
    });
    return createOrderItem;
  }

  async updateOrderItem(
    id: number,
    data: UpdateOrderItemDto,
  ): Promise<orderitems> {
    const editOrderItem = await this.prismaService.orderitems.update({
      where: {
        order_item_id: id,
      },
      data,
    });

    return editOrderItem;
  }

  async delOrderItem(id: number) {
    const delOrderItem = await this.prismaService.orderitems.delete({
      where: {
        order_item_id: id,
      },
    });
    return delOrderItem;
  }
}
