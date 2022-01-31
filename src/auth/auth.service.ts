import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new Error('This Email Is Not exist Please ');
    }
    const valid = await bcrypt.compare(password, user.password);

    if (user && valid) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user,
    };
  }

  async signUp(createUserInput: CreateUserInput) {
    try {
      const user = await this.usersService.findOne(createUserInput.email);
      if (user) {
        throw new Error('This User Email Is Already Exists');
      }
      const password = await bcrypt.hash(createUserInput.password, 10);
      const newUser = await this.usersService.create({
        ...createUserInput,
        password,
      });
      return newUser;
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
