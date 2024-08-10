import { CartitemService } from './cartitem.service';
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
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CartItemDto,
  CreateCartItemDto,
  UpdateCartItemDto,
} from './dto/cartitem.dto';
import { cartitems } from '@prisma/client';

@ApiTags('cartitem')
@Controller('cartitem')
export class CartitemController {
  constructor(private readonly cartitemService: CartitemService) {}
  @Get('getCartItem/:id')
  @ApiParam({ name: 'id', description: 'getCartItem by id user' })
  @ApiResponse({
    status: 200,
    description: 'get order-item by id',
    type: [CartItemDto],
  })
  async getCartItem(@Param('id') id: number): Promise<CartItemDto[]> {
    const getCartItem = await this.cartitemService.getCartItem(id);
    return getCartItem;
  }

  @Post('postCartItem')
  @ApiCreatedResponse({ description: 'post order item' })
  @ApiBody({ description: 'create order', type: CreateCartItemDto })
  async postCartItem(@Body() data: CreateCartItemDto): Promise<cartitems> {
    const postCartItem = await this.cartitemService.postCartItem({
      ...data,
    });
    return postCartItem;
  }

  @Put('updateCartItem/:id')
  @ApiParam({ name: 'id', description: 'update order item by id' })
  @ApiResponse({
    status: 200,
    description: 'update order-item by id',
    type: UpdateCartItemDto,
  })
  @ApiBody({ description: 'update order-item by id', type: UpdateCartItemDto })
  async updateCartItem(
    @Param('id') id: number,
    @Body() data: UpdateCartItemDto,
  ): Promise<cartitems> {
    const updateCartItem = await this.cartitemService.updateCartItem(id, data);
    return updateCartItem;
  }

  @Delete('delCartItem/:id')
  @ApiParam({ name: 'id', description: 'delCartItem by id' })
  @ApiResponse({
    status: 200,
    description: 'remove order item by id',
    type: String,
  })
  async delCartItem(@Param('id') id: number): Promise<String> {
    await this.cartitemService.delCartItem(id);
    return 'del successfully!';
  }
}
