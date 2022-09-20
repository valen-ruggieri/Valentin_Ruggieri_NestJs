import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class MutationProdutsInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  idCart: String;
  @Field()
  @IsNotEmpty()
  @IsString()
  idProduct: String;
}
