import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO, RegisterDTO } from './dto/user.dto';
import { PrismaService } from '../../../prisma/Prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDTO: RegisterDTO) {
    const { name, email, password } = registerDTO;
    const user = {
      name,
      email,
      password,
    };

    return user;
  }

  async Login(loginDTO: LoginDTO) {
    const { email, password } = loginDTO;
    const user = {
      email,
      password,
    };

    return user;
  }

  async getUsers() {
    return this.prisma.user.findMany({});
  }
}
