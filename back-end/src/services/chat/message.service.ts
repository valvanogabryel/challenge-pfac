import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { Message } from 'src/messages/entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [];
  activeUsers: string[] = [];
  clientToUser = {};

  async waitForUsername(clientId: string): Promise<string> {
    return new Promise((resolve, _) => {
      const interval = setInterval(() => {
        const username = this.getClientName(clientId);
        if (username) {
          clearInterval(interval);
          resolve(username);
        }
      }, 100);
    });
  }

  join(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    this.activeUsers.push(name);
    return Object.values(this.clientToUser);
  }

  leave(clientId: string) {
    const name = this.clientToUser[clientId];

    if (name) {
      delete this.clientToUser[clientId];
      this.activeUsers = this.activeUsers.filter((user) => user !== name);
    }

    return this.getActiveUsers();
  }

  getActiveUsers() {
    return this.activeUsers;
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  async create(createMessageDto: CreateMessageDto, clientId: string) {
    try {
      const username = await this.waitForUsername(clientId);
      const message = {
        name: username,
        text: createMessageDto.text,
      };

      this.messages.push(message);
      return message;
    } catch (error) {
      console.error('Erro ao aguardar o nome de usuário:', error);
    }
  }

  findAll() {
    return this.messages;
  }
}
