import { CreateMessageDto } from 'src/dto/create-message.dto';
export declare class MessagesService {
    private readonly redis;
    private readonly MESSAGES_KEY;
    constructor();
    activeUsers: string[];
    clientToUser: {};
    create(createMessageDto: CreateMessageDto, clientId: string): Promise<{
        name: string;
        text: string;
    }>;
    waitForUsername(clientId: string): Promise<string>;
    join(name: string, clientId: string): unknown[];
    leave(clientId: string): string[];
    getActiveUsers(): string[];
    getClientName(clientId: string): any;
    findAll(): Promise<any[]>;
    getAllMessages(): Promise<any[]>;
}
