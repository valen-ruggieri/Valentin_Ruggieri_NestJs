import { Document } from 'mongoose';
import { Product } from 'src/products/models/products.model';

export interface Carts extends Document {
  _id?: String;
  timestamp: String;
  precioTotal: Number;
  products: [Product];
}
