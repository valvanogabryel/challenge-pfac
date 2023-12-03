import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { UserService } from '../../services/users/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async createUser(@Body() userObject: User) {
    try {
      return await this.userService.register(userObject);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
