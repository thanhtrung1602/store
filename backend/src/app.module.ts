import { JwtService } from '@nestjs/jwt';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
import { OrdersModule } from './modules/orders/orders.module';
import JwtMiddleWare from './middleware/jwt.middleware';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CloudinaryModule,
    ProductsModule,
    CategoriesModule,
    OrderItemModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    JwtService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleWare).forRoutes('/users/getAllUsers');
  }
}
