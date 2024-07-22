import { Decimal } from '@prisma/client/runtime/library';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetProductDto {
  @IsNumber()
  product_id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: Decimal;

  @IsNumber()
  stock: number;

  @IsNumber()
  category_id: number;

  @IsDate()
  created_at: Date;
}
export class createProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}
