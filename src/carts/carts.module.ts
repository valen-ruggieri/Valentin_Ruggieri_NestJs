import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsResolver } from './carts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { cartsSchema } from './carts.schema';
import { productSchema } from 'src/products/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'carts', schema: cartsSchema }]),
    MongooseModule.forFeature([{ name: 'products', schema: productSchema }]),
  ],

  providers: [CartsService, CartsResolver]
})
export class CartsModule {}
