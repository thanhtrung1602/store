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
        user_id: Number(id),
      },
    });

    return getOrderItem;
  }

  async postOrderItem({
    order_id,
    product_id,
    user_id,
    quantity,
    price,
  }: CreateOrderItemDto): Promise<orderitems> {
    const checkOrderItem = await this.prismaService.orderitems.findFirst({
      where: {
        product_id: product_id,
        order_id: order_id,
      },
    });

    if (checkOrderItem) {
      const updateOrderItem = await this.prismaService.orderitems.update({
        where: {
          order_item_id: checkOrderItem.order_item_id,
        },
        data: {
          quantity: checkOrderItem.quantity + quantity,
          price: checkOrderItem.price,
        },
      });

      return updateOrderItem;
    } else {
      const newOrderItem = await this.prismaService.orderitems.create({
        data: {
          order_id,
          product_id,
          user_id,
          quantity,
          price,
        },
      });

      return newOrderItem;
    }
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
