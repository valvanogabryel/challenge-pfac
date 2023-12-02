import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { Message } from 'src/messages/entities/message.entity';
import redis from 'src/database/redisConnection';
import { Redis } from 'ioredis';
import { response } from 'express';

@Injectable()
export class MessagesService {
  private readonly redis: Redis;
  private readonly MESSAGES_KEY = 'messages';

  constructor() {
    this.redis = redis;
  }

  activeUsers: string[] = [];
  clientToUser = {};

  async create(createMessageDto: CreateMessageDto, clientId: string) {
    try {
      const username = await this.waitForUsername(clientId);
      const message = {
        name: username,
        text: createMessageDto.text,
      };

    
      await this.redis.rpush(this.MESSAGES_KEY, JSON.stringify(message));
      return message;
    } catch (error) {
      console.error('Erro ao aguardar o nome de usuário:', error);
      throw error;
    }
  }

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

  async findAll() {
    try {
      return await this.getAllMessages();
    } catch (error) {
      console.error('Erro ao buscar todas as mensagens:', error);
      throw error;
    }
  }

  async getAllMessages() {
    try {
      const response = await this.redis.lrange(this.MESSAGES_KEY, 0, -1);
      const parsedMessages = response.map((msg) => JSON.parse(msg));
      return parsedMessages;
    } catch (error) {
      console.error('Erro ao buscar mensagens no Redis:', error);
      throw error;
    }
  }
}
