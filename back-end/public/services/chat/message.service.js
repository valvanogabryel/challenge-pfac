"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const redisConnection_1 = require("../../database/redisConnection");
let MessagesService = class MessagesService {
    constructor() {
        this.MESSAGES_KEY = 'messages';
        this.activeUsers = [];
        this.clientToUser = {};
        this.redis = redisConnection_1.default;
    }
    async create(createMessageDto, clientId) {
        try {
            const username = await this.waitForUsername(clientId);
            const message = {
                name: username,
                text: createMessageDto.text,
            };
            await this.redis.rpush(this.MESSAGES_KEY, JSON.stringify(message));
            return message;
        }
        catch (error) {
            console.error('Erro ao aguardar o nome de usuário:', error);
            throw error;
        }
    }
    async waitForUsername(clientId) {
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
    join(name, clientId) {
        this.clientToUser[clientId] = name;
        this.activeUsers.push(name);
        return Object.values(this.clientToUser);
    }
    leave(clientId) {
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
    getClientName(clientId) {
        return this.clientToUser[clientId];
    }
    async findAll() {
        try {
            return await this.getAllMessages();
        }
        catch (error) {
            console.error('Erro ao buscar todas as mensagens:', error);
            throw error;
        }
    }
    async getAllMessages() {
        try {
            const response = await this.redis.lrange(this.MESSAGES_KEY, 0, -1);
            const parsedMessages = response.map((msg) => JSON.parse(msg));
            return parsedMessages;
        }
        catch (error) {
            console.error('Erro ao buscar mensagens no Redis:', error);
            throw error;
        }
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MessagesService);
//# sourceMappingURL=message.service.js.map