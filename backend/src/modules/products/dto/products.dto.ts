import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetProductDto {
  @IsNumber()
  product_id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  image: string;

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
  price: number;

  image: string;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  user_id: number;
}

export class UpdateProductDto extends createProductDto {}
