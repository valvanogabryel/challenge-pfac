import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { MessagesService } from 'src/services/chat/message.service';
export declare class ChatGateway {
    private readonly messagesService;
    server: Server;
    constructor(messagesService: MessagesService);
    handleMessage(newMessage: CreateMessageDto, client: Socket): Promise<{
        name: string;
        text: string;
    }>;
    findAll(): Promise<any[]>;
    joinRoom(name: string, client: Socket): void;
    handleDisconnect(client: Socket): void;
    typing(isTyping: boolean, client: Socket): Promise<void>;
}
