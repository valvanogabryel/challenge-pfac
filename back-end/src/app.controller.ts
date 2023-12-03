import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async sayHello() {
    return {
      message: 'Hello! Navigate to /users',
    };
  }
}
