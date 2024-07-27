import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderItemDto {
  @ApiProperty()
  order_item_id: number;

  @ApiProperty()
  order_id: number;

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

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  order_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}

export class UpdateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}
