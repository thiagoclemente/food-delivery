import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.type';
import { RegisterDTO } from './dto/user.dto';
import { BadRequestException } from '@nestjs/common';
import { User } from './entities/ user.entity';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDTO: RegisterDTO,
  ): Promise<RegisterResponse> {
    if (!registerDTO.name || !registerDTO.email || !registerDTO.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const user = await this.userService.register(registerDTO);

    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}
