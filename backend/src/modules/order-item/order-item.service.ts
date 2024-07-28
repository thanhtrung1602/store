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
    try {
      const getOrderItem = await this.prismaService.orderitems.findMany({
        where: {
          user_id: Number(id),
        },
      });

      return getOrderItem;
    } catch (error) {
      throw error;
    }
  }

  async postOrderItem({
    order_id,
    product_id,
    user_id,
    quantity,
    price,
  }: CreateOrderItemDto): Promise<orderitems> {
    try {
      const checkOrderItem = await this.prismaService.orderitems.findFirst({
        where: {
          product_id: Number(product_id),
          order_id: Number(order_id),
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
            order_id: Number(order_id),
            product_id: Number(product_id),
            user_id: Number(user_id),
            quantity: Number(quantity),
            price: Number(price),
          },
        });

        return newOrderItem;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateOrderItem(
    id: number,
    data: UpdateOrderItemDto,
  ): Promise<orderitems> {
    try {
      const editOrderItem = await this.prismaService.orderitems.update({
        where: {
          order_item_id: id,
        },
        data,
      });

      return editOrderItem;
    } catch (error) {
      throw error;
    }
  }

  async delOrderItem(id: number) {
    try {
      const delOrderItem = await this.prismaService.orderitems.delete({
        where: {
          order_item_id: id,
        },
      });
      return delOrderItem;
    } catch (error) {
      throw error;
    }
  }
}
