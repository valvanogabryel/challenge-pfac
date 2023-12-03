import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    register(user: User): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
}
