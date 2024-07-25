import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllCategories(): Promise<CategoryDto[]> {
    const allProducts = await this.prismaService.categories.findMany();
    return allProducts;
  }

  async createCategory(data: CreateCategoryDto): Promise<categories> {
    const createCategory = await this.prismaService.categories.create({
      data: {
        name: data.name,
      },
    });
    return createCategory;
  }

  async updateCategory(
    id: number,
    data: UpdateCategoryDto,
  ): Promise<categories> {
    const updateCategory = await this.prismaService.categories.update({
      where: {
        category_id: Number(id),
      },
      data,
    });
    return updateCategory;
  }

  async deleteCategory(id: number) {
    const delCategory = await this.prismaService.categories.delete({
      where: { category_id: id },
    });

    return delCategory;
  }
}
