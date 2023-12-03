import { Module } from '@nestjs/common';
import { UserService } from '../../services/users/user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
