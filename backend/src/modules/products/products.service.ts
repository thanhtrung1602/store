import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CreateProductDto,
  GetProductDto,
  UpdateProductDto,
} from './dto/products.dto';
import { products } from '@prisma/client';

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
        product_id: Number(id),
      },
    });

    return product;
  }

  async getProductByCategory(id: number): Promise<GetProductDto[]> {
    const productCategory = await this.prismaService.products.findMany({
      where: {
        category_id: Number(id),
      },
    });

    return productCategory;
  }

  async createProduct(file, data: CreateProductDto): Promise<products> {
    const createProduct = await this.prismaService.products.create({
      data: {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        image: file,
        stock: Number(data.stock),
        category_id: Number(data.category_id),
        user_id: Number(data.user_id),
      },
    });

    return createProduct;
  }

  async updateProduct(
    file: string,
    data: UpdateProductDto,
    id: number,
  ): Promise<products> {
    const updateProduct = await this.prismaService.products.update({
      where: {
        product_id: id,
      },
      data: {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        image: file,
        stock: Number(data.stock),
        category_id: Number(data.category_id),
        user_id: Number(data.user_id),
      },
    });

    return updateProduct;
  }

  async deleteProduct(id: number) {
    const delProduct = await this.prismaService.products.delete({
      where: {
        product_id: Number(id),
      },
    });

    return delProduct;
  }
}
