import { User } from '@prisma/client';
import { AuthService } from 'src/services/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
    getProfile(req: {
        user: User;
    }): {
        id: string;
        name: string;
        email: string;
        password: string;
    };
}
