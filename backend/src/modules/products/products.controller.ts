import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('getAllProduct')
  getAllProduct() {}

  @Get('getOneProduct/:id')
  getOneProduct() {}

  @Get('getProductByCategory/:id')
  getProductByCategory() {}

  @Post('createProduct')
  createProduct() {}

  @Put('updateProduct')
  updateProduct() {}

  @Delete('deleteProduct')
  deleteProduct() {}
}
