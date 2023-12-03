import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UsersModule } from '../users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../../controllers/auth/auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController, AbortController],
})
export class AuthModule {}
