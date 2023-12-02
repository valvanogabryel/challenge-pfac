import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async sayHello() {
    return {
      message: 'Hello! Navigate to /users',
    };
  }
}
