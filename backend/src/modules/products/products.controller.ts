import { CloudinaryService } from './../../cloudinary/cloudinary.service';
import { products } from '@prisma/client';
import {
  CreateProductDto,
  GetProductDto,
  UpdateProductDto,
} from './dto/products.dto';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get('getAllProduct')
  @ApiResponse({
    status: 200,
    description: 'Get all products',
    type: [GetProductDto],
  })
  async getAllProduct(): Promise<GetProductDto[]> {
    try {
      const allProduct = await this.productsService.getAllProduct();
      return allProduct;
    } catch (error) {
      throw error;
    }
  }

  @Get('getAllProductPagination')
  @ApiResponse({
    status: 200,
    description: 'Get all products',
    type: [GetProductDto],
  })
  async getAllProductPagination(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 2,
  ): Promise<GetProductDto[]> {
    try {
      const allPagination = await this.productsService.getAllProductPagination(
        page,
        limit,
      );
      return allPagination;
    } catch (error) {
      throw error;
    }
  }

  @Get('getOneProduct/:id')
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Get one product',
    type: GetProductDto,
  })
  async getOneProduct(@Param('id') id: number): Promise<GetProductDto> {
    try {
      const oneProduct = await this.productsService.getOneProduct(id);
      return oneProduct;
    } catch (error) {
      throw error;
    }
  }

  @Get('getProductByCategory/:id')
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Get product by category',
    type: [GetProductDto],
  })
  async getProductByCategory(
    @Param('id') id: number,
  ): Promise<GetProductDto[]> {
    try {
      const byCategory = await this.productsService.getProductByCategory(id);
      return byCategory;
    } catch (error) {
      throw error;
    }
  }

  @Post('createProduct')
  @ApiCreatedResponse({
    description: 'successfully create product.',
  })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'create Product',
    type: CreateProductDto,
  })
  async createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: CreateProductDto,
  ): Promise<products> {
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }
      const uploadResult = await this.cloudinaryService.uploadFile(file);
      const imgUrl = uploadResult.secure_url;
      const postProduct = await this.productsService.createProduct(
        imgUrl,
        data,
      );
      return postProduct;
    } catch (error) {
      throw error;
    }
  }

  @Put('updateProduct/:id')
  @ApiParam({ name: 'id', description: 'Update product by id' })
  @ApiResponse({
    status: 200,
    description: 'update product',
    type: UpdateProductDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async updateProduct(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<products> {
    try {
      const numberId = Number(id);

      const uploadResult = await this.cloudinaryService.uploadFile(file);

      const imgUrl = uploadResult.secure_url;

      const editProduct = await this.productsService.updateProduct(
        imgUrl,
        data,
        numberId,
      );
      return editProduct;
    } catch (error) {
      throw error;
    }
  }

  @Delete('deleteProduct/:id')
  @ApiParam({ name: 'id', description: 'delete product by id' })
  @ApiResponse({
    status: 200,
    description: 'delete product by id',
    type: String,
  })
  async deleteProduct(@Param('id') id: number): Promise<string> {
    try {
      await this.productsService.deleteProduct(id);
      return 'Product deleted successfully';
    } catch (error) {
      throw error;
    }
  }
}
