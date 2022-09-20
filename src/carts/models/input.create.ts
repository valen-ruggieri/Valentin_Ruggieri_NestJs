import { InputType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/models/products.model';
import { IsNotEmpty, IsNumber, IsString, IsArray } from 'class-validator';
import { CreateProductInput } from 'src/products/models/input.create';

@InputType()
export class CreateCartInput {
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
