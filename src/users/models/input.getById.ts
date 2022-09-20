import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GetUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: String;
}
