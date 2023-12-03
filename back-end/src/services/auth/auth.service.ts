import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const ONE_DAY = 86400;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException();

    const equalPasswords = await bcrypt.compare(password, user.password);

    if (!equalPasswords) throw new UnauthorizedException();

    const payload = { sub: user.id, email: user.email, name: user.name };

    return {
      access_token: await this.jwt.signAsync(payload, {
        secret: process.env.SECRET,
        expiresIn: ONE_DAY,
      }),
    };
  }
}
