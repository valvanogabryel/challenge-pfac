import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async register(user: User) {
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

  async delete(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
