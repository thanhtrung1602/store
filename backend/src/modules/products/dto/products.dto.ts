import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetProductDto {
  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  product_id: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  image: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  stock: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  category_id: number;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  created_at: Date;
}
export class CreateProductDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  image: string;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  stock: number;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  user_id: number;
}

export class UpdateProductDto extends CreateProductDto {}
