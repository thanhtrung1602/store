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
    try {
      const products = await this.prismaService.products.findMany();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getAllProductPagination(
    page: number,
    limit: number,
  ): Promise<GetProductDto[]> {
    try {
      const skip = (page - 1) * limit;
      const products = await this.prismaService.products.findMany({
        skip: skip,
        take: limit,
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getOneProduct(id: number): Promise<GetProductDto> {
    try {
      const product = await this.prismaService.products.findUnique({
        where: {
          product_id: Number(id),
        },
      });

      return product;
    } catch (error) {
      throw error;
    }
  }

  async getProductByCategory(id: number): Promise<GetProductDto[]> {
    try {
      const productCategory = await this.prismaService.products.findMany({
        where: {
          category_id: Number(id),
        },
      });

      return productCategory;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(file, data: CreateProductDto): Promise<products> {
    try {
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
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(
    file: string,
    data: UpdateProductDto,
    id: number,
  ): Promise<products> {
    try {
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
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: number) {
    try {
      const delProduct = await this.prismaService.products.delete({
        where: {
          product_id: Number(id),
        },
      });

      return delProduct;
    } catch (error) {
      throw error;
    }
  }
}
