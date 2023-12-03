"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const prisma_service_1 = require("./database/prisma.service");
const user_controller_1 = require("./controllers/users/user.controller");
const user_service_1 = require("./services/users/user.service");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const auth_service_1 = require("./services/auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const chat_gateway_1 = require("./gateway/chat.gateway");
const message_service_1 = require("./services/chat/message.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, auth_controller_1.AuthController],
        providers: [
            prisma_service_1.PrismaService,
            user_service_1.UserService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            chat_gateway_1.ChatGateway,
            message_service_1.MessagesService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map