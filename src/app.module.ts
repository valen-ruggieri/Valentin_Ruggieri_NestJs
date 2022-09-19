import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CartsController } from './carts/carts.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { CartsService } from './carts/carts.service';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UsersModule, ProductsModule, CartsModule],
  controllers: [AppController, ProductsController, CartsController, UsersController],
  providers: [AppService, ProductsService, CartsService],
})
export class AppModule {}
