import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  titulo: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  descripcion: String;
  @Field()
  @IsNotEmpty()
  @IsNumber()
  timestamp: String;
  @Field((type) => Int)
  precio: Number;
  @Field()
  @IsNotEmpty()
  @IsString()
  img: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  codigo: String;
}
