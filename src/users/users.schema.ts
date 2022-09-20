import { Schema } from 'mongoose';
export const usersSchema = new Schema({
  user: String,
  email: String,
  password: String,
  userType: String,
  address: String,
  age: String,
  phone: String,
  image: String,
  cartId: String,
});
