import { User } from '@prisma/client';
import { UserService } from 'src/services/users/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }[]>;
    findUserById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    createUser(userObject: User): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
}
