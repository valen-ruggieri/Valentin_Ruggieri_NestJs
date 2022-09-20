import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { Product } from 'src/products/models/products.model';
import { CreateProductInput } from './models/input.create';
import { DeleteProductInput } from './models/input.delete';
import { UpdateProductInput } from './models/input.update';
import { ProductsService } from './products.service';
@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}
  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }
  @Mutation(() => Product)
  async postProduct(
    @Args('createProduct') createProduct: CreateProductInput,
  ): Promise<Product> {
    return await this.productService.postProduct(createProduct);
  }
  @Mutation(() => Product)
  async putProduct(
    @Args('updateProduct') updateProduct: UpdateProductInput,
  ): Promise<Product> {
    return await this.productService.putProduct(updateProduct);
  }
  @Mutation(() => Product)
  async deleteProduct(
    @Args('deleteProduct') deleteProduct: DeleteProductInput,
  ): Promise<Product> {
    return await this.productService.deleteProduct(deleteProduct);
  }
}
