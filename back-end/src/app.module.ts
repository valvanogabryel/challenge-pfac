import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserController } from './controllers/users/user.controller';
import { UserService } from './services/users/user.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { ChatGateway } from './gateway/chat.gateway';
import { MessagesService } from './services/chat/message.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, AuthController],
  providers: [
    PrismaService,
    UserService,
    AuthService,
    JwtService,
    ChatGateway,
    MessagesService,
  ],
})
export class AppModule {}
