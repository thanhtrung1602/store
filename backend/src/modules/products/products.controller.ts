import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('getAllProduct')
  getAllProduct() {}

  @Get('getOneProduct/:id')
  getOneProduct() {}

  @Get('getProductByCategory/:id')
  getProductByCategory() {}
}
