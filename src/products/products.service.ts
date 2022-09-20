import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/Interfaces/products';
import { CreateProductInput } from './models/input.create';
import { DeleteProductInput } from './models/input.delete';
import { UpdateProductInput } from './models/input.update';
@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private productModel: Model<Product>) {}
  async getProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }
  async postProduct(createProduct: CreateProductInput): Promise<Product> {
    return await this.productModel.create(createProduct);
  }
  async putProduct(updateProduct: UpdateProductInput): Promise<Product> {
    const { _id } = updateProduct;
    return await this.productModel.findByIdAndUpdate(_id, { ...updateProduct });
  }
  async deleteProduct(deleteProduct: DeleteProductInput): Promise<Product> {
    const { _id } = deleteProduct;
    return await this.productModel.findByIdAndRemove(_id);
  }
}
