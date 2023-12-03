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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.user.findMany();
    }
    async findById(id) {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async register(user) {
        const userAlreadyExists = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: user.email }, { name: user.name }],
            },
        });
        if (userAlreadyExists) {
            throw new Error('Usuário já cadastrado!');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return await this.prisma.user.create({
            data: {
                ...user,
                password: hashedPassword,
            },
        });
    }
    async delete(id) {
        return await this.prisma.user.delete({ where: { id } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map