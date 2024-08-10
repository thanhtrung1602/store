import { number } from './../../../../client/node_modules/@types/prop-types/index.d';
import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CartItemDto,
  CreateCartItemDto,
  UpdateCartItemDto,
} from './dto/cartitem.dto';
import { cartitems } from '@prisma/client';

@Injectable()
export class CartitemService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCartItem(id: number): Promise<CartItemDto[]> {
    try {
      const getCartItem = await this.prismaService.cartitems.findMany({
        where: {
          user_id: Number(id),
        },
      });

      return getCartItem;
    } catch (error) {
      throw error;
    }
  }

  async postCartItem({
    product_id,
    user_id,
    quantity,
    price,
  }: CreateCartItemDto): Promise<cartitems> {
    try {
      const checkCartItem = await this.prismaService.cartitems.findFirst({
        where: {
          product_id: Number(product_id),
          user_id: Number(user_id),
        },
      });

      if (checkCartItem) {
        const updateCartItem = await this.prismaService.cartitems.update({
          where: {
            cart_item_id: checkCartItem.cart_item_id,
          },
          data: {
            quantity: checkCartItem.quantity + quantity,
            price: checkCartItem.price,
          },
        });

        return updateCartItem;
      } else {
        const newCartItem = await this.prismaService.cartitems.create({
          data: {
            product_id: Number(product_id),
            user_id: Number(user_id),
            quantity: Number(quantity),
            price: Number(price),
          },
        });

        return newCartItem;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateCartItem(
    id: number,
    data: UpdateCartItemDto,
  ): Promise<cartitems> {
    try {
      const editCartItem = await this.prismaService.cartitems.update({
        where: {
          cart_item_id: id,
        },
        data,
      });

      return editCartItem;
    } catch (error) {
      throw error;
    }
  }

  async delCartItem(id: number) {
    try {
      const delCartItem = await this.prismaService.cartitems.delete({
        where: {
          cart_item_id: id,
        },
      });
      return delCartItem;
    } catch (error) {
      throw error;
    }
  }
}
