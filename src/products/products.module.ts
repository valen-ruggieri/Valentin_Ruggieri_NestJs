import { Module } from '@nestjs/common';
import { productSchema } from './products.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: productSchema }]),
  ],

  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
