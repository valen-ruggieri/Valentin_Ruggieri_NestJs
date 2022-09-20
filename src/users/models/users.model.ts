import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  user: String;
  @Field()
  email: String;
  @Field()
  password: String;
  @Field()
  userType: String;
  @Field()
  address: String;
  @Field()
  age: String;
  @Field()
  phone: String;
  @Field()
  image: String;
  @Field()
  cartId: String;
}
