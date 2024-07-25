import { CategoriesService } from './categories.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { categories } from '@prisma/client';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('getAllCategories')
  @ApiResponse({
    status: 200,
    description: 'Get all categories',
    type: [CategoryDto],
  })
  async getAllCategories(): Promise<CategoryDto[]> {
    const allCategories = await this.categoriesService.getAllCategories();
    return allCategories;
  }

  @Post('createCategory')
  @ApiCreatedResponse({
    description: 'Create category',
  })
  @ApiBody({
    description: 'create Product',
    type: CreateCategoryDto,
  })
  async createCategory(@Body() data: CreateCategoryDto): Promise<categories> {
    const createCategory = await this.categoriesService.createCategory(data);
    return createCategory;
  }

  @Put('updateCategory/:id')
  @ApiParam({ name: 'id', description: 'update category by id' })
  @ApiResponse({
    status: 200,
    description: 'update category',
    type: UpdateCategoryDto,
  })
  async updateCategory(
    @Param('id') id: number,
    @Body() data: UpdateCategoryDto,
  ): Promise<categories> {
    const updateCategory = await this.categoriesService.updateCategory(
      id,
      data,
    );
    return updateCategory;
  }

  @Delete('delCategory/:id')
  @ApiParam({ name: 'id', description: 'del category by id' })
  @ApiResponse({
    status: 200,
    description: 'delete category',
    type: String,
  })
  async delCategory(@Param('id') id: number): Promise<string> {
    await this.categoriesService.deleteCategory(id);
    return 'Delete successfully!';
  }
}
