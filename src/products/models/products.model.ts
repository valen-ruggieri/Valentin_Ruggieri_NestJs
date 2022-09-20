import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  _id?:String
  @Field()
  titulo: String;
  @Field()
  descripcion: String;
  @Field()
  timestamp: String;
  @Field((type) => Int)
  precio: Number;
  @Field()
  img: String;
  @Field()
  codigo: String;
}
