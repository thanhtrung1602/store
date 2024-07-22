import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import { GetProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProduct(): Promise<GetProductDto[]> {
    const products = await this.prismaService.products.findMany();
    return products;
  }

  async getOneProduct(id: number): Promise<GetProductDto> {
    const product = await this.prismaService.products.findUnique({
      where: {
        product_id: id,
      },
    });

    return product;
  }

  async getProductByCategory(id: number): Promise<GetProductDto[]> {
    const productCategory = await this.prismaService.products.findMany({
      where: {
        category_id: id,
      },
    });

    return productCategory;
  }

  createProduct() {}

  updateProduct() {}

  deleteProduct() {}
}
