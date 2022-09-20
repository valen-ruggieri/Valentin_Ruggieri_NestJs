import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carts } from 'src/Interfaces/carts';
import { Product } from 'src/products/models/products.model';
import { Cart } from './models/carts.model';
import { CreateCartInput } from './models/input.create';
import { DeleteCartInput } from './models/input.delete';
import { GetCartInput } from './models/input.getById';
import { UpdateCartInput } from './models/input.update';
import { MutationProdutsInput } from './models/input.MutationProduts';
import { DeleteAllProductsInput } from './models/input.deleteAllProducts';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel('carts') private cartModel: Model<Carts>,
    @InjectModel('products') private productModel: Model<Product>,
  ) {}
  async getCartById(getById: GetCartInput): Promise<Carts> {
    const { _id } = getById;
    return await this.cartModel.findById(_id);
  }
  async postCart(postCart: CreateCartInput): Promise<Cart> {
    return await this.cartModel.create(postCart);
  }
  async putCart(putCart: UpdateCartInput): Promise<Cart> {
    const { _id } = putCart;
    return await this.cartModel.findByIdAndUpdate(_id, { ...putCart });
  }
  async deleteCart(deleteCart: DeleteCartInput): Promise<Cart> {
    const { _id } = deleteCart;
    return await this.cartModel.findByIdAndRemove(_id);
  }
  async addProductInCart(addProduct: MutationProdutsInput): Promise<Cart> {
    const { idCart, idProduct } = addProduct;
    const product = await this.productModel.findById(idProduct);
    let cart: Cart = await this.cartModel.findById(idCart);
    let cartEdit = cart.products;
    return await this.cartModel.findByIdAndUpdate(idCart, {
      products: [...cartEdit, { ...product }],
    });
  }
  async deleteProductInCart(
    deleteProduct: MutationProdutsInput,
  ): Promise<Cart> {
    const { idCart, idProduct } = deleteProduct;
    const product = await this.productModel.findById(idProduct);
    let cart: Cart = await this.cartModel.findById(idCart);
    let cartEdit = cart.products.filter((e) => e.codigo !== product.codigo);
    console.log(cartEdit);
    return await this.cartModel.findByIdAndUpdate(idCart, {
      products: [...cartEdit],
    });
  }
  async deleteAllProducts(
    deleteAllProducts: DeleteAllProductsInput,
  ): Promise<Cart> {
    const { _id } = deleteAllProducts;
    return await this.cartModel.findByIdAndUpdate(_id, {
      products: [],
    });
  }
}
