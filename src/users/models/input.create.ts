import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
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
