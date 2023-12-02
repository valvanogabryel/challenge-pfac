import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { MessagesService } from 'src/services/chat/message.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() newMessage: CreateMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    if (client.id) {
      const message = await this.messagesService.create(newMessage, client.id);
      this.server.emit('message', message);
      return message;
    }
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('name') name: string,
    @ConnectedSocket() client: Socket
  ) {
    const activeUsers = this.messagesService.join(name, client.id);
    client.broadcast.emit('activeUsers', activeUsers);
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(client: Socket) {
    const activeUsers = this.messagesService.leave(client.id);
    client.broadcast.emit('activeUsers', activeUsers); 
  }

  @SubscribeMessage('typing')
  async typing(
    @MessageBody('isTyping') isTyping: boolean,
    @ConnectedSocket() client: Socket
  ) {
    const name = await this.messagesService.getClientName(client.id);
    client.broadcast.emit('typing', { name, isTyping });
  }
}
