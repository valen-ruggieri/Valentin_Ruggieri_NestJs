import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString,IsArray } from 'class-validator';
import { CreateProductInput } from 'src/products/models/input.create';
import { Product } from 'src/products/models/products.model';


@InputType()
export class UpdateCartInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  timestamp: String;
  @Field((type) => Int)
  @IsNotEmpty()
  @IsNumber()
  precioTotal: Number;
  @Field((type) => [CreateProductInput])
  @IsNotEmpty()
  @IsArray()
  products: [CreateProductInput];
}


