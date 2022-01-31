import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'getAllUsers' })
  @UseGuards(JwtAuthGuard)
  findAll(@Context() context) {
    const user = context.req.user;
    if (user.role === 'admin') {
      return this.usersService.findAll();
    }
    throw new UnauthorizedException();
  }

  @Query(() => User, { name: 'getSingleUser' })
  async findOne(@Args('email') email: string): Promise<any> {
    return await this.usersService.findOne(email);
  }
}
