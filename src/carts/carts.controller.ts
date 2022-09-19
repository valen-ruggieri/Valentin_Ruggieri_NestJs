import { Controller, Get, Post, Delete } from '@nestjs/common';
import { Cart } from 'src/DTOs/cartDTO';

@Controller('carts')
export class CartsController {
  @Get()
  showCartByUserId(): Cart {
    return {
      precioTotal: 43,
      products: [
        {
          codigo: '',
          descripcion: '',
          img: '',
          precio: 45,
          titulo: '',
          timestamp: '',
          _id: '',
        },
      ],
      timestamp: 'dfsd',
    };
  }
  @Get()
  buyCart() {}
  @Post()
  addProductInCart() {}
  @Delete()
  deleteProductInCart() {}
  @Delete()
  deleteCart() {}
}
