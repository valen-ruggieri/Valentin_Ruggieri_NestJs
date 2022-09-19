import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from 'src/DTOs/productDTO';
@Controller('products')
export class ProductsController {
  @Get()
  showProducts(): Product[] {
    return [
      {
        codigo: '',
        descripcion: '',
        img: '',
        precio: 45,
        titulo: '',
        timestamp: '',
        _id: '',
      },
    ];
  }
  @Post()
  addProduct(@Param('product') product: Product): Product {
    return product;
  }
  @Put('/:id')
  updateProduct(@Param('id') id: string): Product {
    return {
      codigo: '',
      descripcion: '',
      img: '',
      precio: 45,
      titulo: '',
      timestamp: '',
      _id: '',
    };
  }
  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Product {
    return {
      codigo: '',
      descripcion: '',
      img: '',
      precio: 45,
      titulo: '',
      timestamp: '',
      _id: '',
    };
  }
}
