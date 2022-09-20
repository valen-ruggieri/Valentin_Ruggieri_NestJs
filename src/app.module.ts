import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ProductsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://valentin_ruggieri:3wSixuIMse94iPpz@cluster0.lur2f.mongodb.net/nest',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
