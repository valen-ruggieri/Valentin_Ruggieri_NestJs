import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './models/input.create';
import { DeleteUserInput } from './models/input.delete';
import { GetUserInput } from './models/input.getById';
import { UpdateUserInput } from './models/input.update';
import { User } from './models/users.model';
@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private productModel: Model<User>) {}
  async getUsers(): Promise<User[]> {
    return await this.productModel.find();
  }
  async getUsersById(getUserById: GetUserInput): Promise<User> {
    const { _id } = getUserById;
    return await this.productModel.findById(_id);
  }

  async postUser(postUserInput: CreateUserInput): Promise<User> {
    return await this.productModel.create(postUserInput);
  }

  async putUser(putUserInput: UpdateUserInput): Promise<User> {
    const { _id } = putUserInput;
    return await this.productModel.findByIdAndUpdate(_id, { ...putUserInput });
  }

  async deleteUser(deleteUserInput: DeleteUserInput): Promise<User> {
    const { _id } = deleteUserInput;
    return await this.productModel.findByIdAndDelete(_id);
  }
}
