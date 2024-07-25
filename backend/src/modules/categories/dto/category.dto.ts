import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  @IsNumber()
  category_id: number;

  @ApiProperty()
  @IsString()
  name: string;
}

export class CreateCategoryDto {
  @ApiProperty({ type: String })
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
