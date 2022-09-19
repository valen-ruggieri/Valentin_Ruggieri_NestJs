import { Product } from './productDTO';

export class Cart {
  _id?: string;
  timestamp: string;
  precioTotal: number;
  products: [Product];
}
