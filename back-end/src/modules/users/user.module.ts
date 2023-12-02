import { Module } from '@nestjs/common';
import { UserService } from 'src/services/users/user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
