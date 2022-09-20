import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  user: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  email: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  password: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  userType: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  address: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  age: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  phone: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  image: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  cartId: String;
}
