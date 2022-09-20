import { Schema } from 'mongoose';
export const cartsSchema = new Schema({
  timestamp: String,
  precioTotal: Number,
  products: Array,
});
