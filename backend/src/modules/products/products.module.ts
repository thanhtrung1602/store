import { CloudinaryService } from './../../cloudinary/cloudinary.service';
import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CloudinaryProvider } from 'src/cloudinary/cloudinary/cloudinary.provider';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    PrismaService,
    CloudinaryService,
    CloudinaryProvider,
  ],
})
export class ProductsModule {}
