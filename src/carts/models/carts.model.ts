import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/models/products.model';
import { IsNotEmpty, IsNumber, IsString, IsArray } from 'class-validator';

@ObjectType()
export class Cart {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id?: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  timestamp: String;
  @Field((type) => Int)
  @IsNotEmpty()
  @IsNumber()
  precioTotal: Number;
  @Field((type) => [Product])
  @IsNotEmpty()
  @IsArray()
  products: [Product];
}
