import { CloudinaryService } from './../../cloudinary/cloudinary.service';
import { products } from '@prisma/client';
import {
  createProductDto,
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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

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
  @UseInterceptors(FileInterceptor('file'))
  async createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: createProductDto,
  ): Promise<products> {
    if (!file) {
      throw new Error('No file uploaded');
    }
    const uploadResult = await this.cloudinaryService.uploadFile(file);
    const imgUrl = uploadResult.secure_url;
    return this.productsService.createProduct(imgUrl, data);
  }

  @Put('updateProduct/:id')
  @UseInterceptors(FileInterceptor('file'))
  async updateProduct(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<products> {
    const numberId = Number(id);
    const uploadResult = await this.cloudinaryService.uploadFile(file);
    const imgUrl = uploadResult.secure_url;
    return this.productsService.updateProduct(imgUrl, data, numberId);
  }

  @Delete('deleteProduct/:id')
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }
}
