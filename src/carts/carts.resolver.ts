import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartsService } from './carts.service';
import { Cart } from './models/carts.model';
import { CreateCartInput } from './models/input.create';
import { DeleteCartInput } from './models/input.delete';
import { GetCartInput } from './models/input.getById';
import { MutationProdutsInput } from './models/input.MutationProduts';
import { UpdateCartInput } from './models/input.update';
import {DeleteAllProductsInput} from './models/input.deleteAllProducts'
@Resolver(() => Cart)
export class CartsResolver {
  constructor(private cartService: CartsService) {}
  @Query(() => Cart)
  async getCartById(@Args('input') getCartById: GetCartInput): Promise<Cart> {
    return await this.cartService.getCartById(getCartById);
  }
  @Mutation(() => Cart)
  async postCart(@Args('input') postCart: CreateCartInput): Promise<Cart> {
    return await this.cartService.postCart(postCart);
  }
  @Mutation(() => Cart)
  async putCart(@Args('input') putCart: UpdateCartInput): Promise<Cart> {
    return await this.cartService.putCart(putCart);
  }
  @Mutation(()=> Cart)
  async addProductInCart(@Args('input') addProduct: MutationProdutsInput):Promise<Cart> {
    return await this.cartService.addProductInCart(addProduct)
  }
  @Mutation(()=> Cart)
  async deleteProductInCart(@Args('input') deleteProduct: MutationProdutsInput):Promise<Cart> {
    return await this.cartService.deleteProductInCart(deleteProduct)
  }
  @Mutation(() => Cart)
  async deleteAllProducts(@Args('input') deleteAllProducts: DeleteAllProductsInput): Promise<Cart> {
    return await this.cartService.deleteAllProducts(deleteAllProducts);
  }
  @Mutation(() => Cart)
  async deleteCart(@Args('input') deleteCart: DeleteCartInput): Promise<Cart> {
    return await this.cartService.deleteCart(deleteCart);
  }
}
