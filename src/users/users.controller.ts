import { Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from 'src/Interfaces/users';

@Controller('users')
export class UsersController {
  @Get()
  showAccount(): User {
    return {
      address: '',
      age: '',
      cartId: '',
      email: '',
      image: '',
      password: '',
      phone: '',
      user: '',
      userType: '',
    };
  }
  @Get()
  logOut() {}
  @Post()
  signIn() {}
  @Post()
  logIn() {}
  @Delete()
  deleteUser() {}
}
