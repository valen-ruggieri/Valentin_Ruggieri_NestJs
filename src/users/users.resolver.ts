import { User } from './models/users.model';
import { UsersService } from './users.service';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { GetUserInput } from './models/input.getById';
import { UpdateUserInput } from './models/input.update';
import { CreateUserInput } from './models/input.create';
import { DeleteUserInput } from './models/input.delete';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
  @Query(() => User)
  async getUserById(@Args('input') getUserById: GetUserInput): Promise<User> {
    return await this.userService.getUsersById(getUserById);
  }
  @Mutation(() => User)
  async postUser(@Args('input') postUserInput: CreateUserInput): Promise<User> {
    return await this.userService.postUser(postUserInput);
  }

  @Mutation(() => User)
  async putUser(@Args('input') putUserInput: UpdateUserInput): Promise<User> {
    return await this.userService.putUser(putUserInput);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('input') deleteUserInput: DeleteUserInput,
  ): Promise<User> {
    return await this.userService.deleteUser(deleteUserInput);
  }
}
