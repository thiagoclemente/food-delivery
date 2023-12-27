import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO, RegisterDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
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
    const users = [
      {
        id: '123',
        name: 'Thiago',
        email: 'thiago.clemente@gmail.com',
        password: 'password',
      },
    ];

    return users;
  }
}
