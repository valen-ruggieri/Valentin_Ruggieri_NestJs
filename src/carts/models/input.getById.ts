import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GetCartInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: String;
}
