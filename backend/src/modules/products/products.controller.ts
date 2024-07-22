import { GetProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('getAllProduct')
  async getAllProduct(): Promise<GetProductDto[]> {
    return this.productsService.getAllProduct();
  }

  @Get('getOneProduct/:id')
  async getOneProduct(@Param('id') id: number): Promise<GetProductDto> {
    return this.productsService.getOneProduct(id);
  }

  @Get('getProductByCategory/:id')
  async getProductByCategory(
    @Param('id') id: number,
  ): Promise<GetProductDto[]> {
    return this.productsService.getProductByCategory(id);
  }

  @Post('createProduct')
  createProduct() {}

  @Put('updateProduct')
  updateProduct() {}

  @Delete('deleteProduct')
  deleteProduct() {}
}
