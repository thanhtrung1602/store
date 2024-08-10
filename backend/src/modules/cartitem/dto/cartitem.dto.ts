import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CartItemDto {
  @ApiProperty()
  cart_item_id: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  created_at: Date;
}

export class CreateCartItemDto {
  @ApiProperty()
  product_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;
}

export class UpdateCartItemDto {
  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}
