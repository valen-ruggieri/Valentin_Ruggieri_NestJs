import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from './users.resolver';
import { usersSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: usersSchema }]),
  ],
  controllers: [],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
