import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { AuthService } from './auth.service';
import { LoginRespose } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';



@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginRespose)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => LoginRespose, { name: 'makeUser' })
  async signUp(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Context() context,
  ) {
    const user = await this.authService.signUp(createUserInput);
    return this.authService.login(user);
  }
}
