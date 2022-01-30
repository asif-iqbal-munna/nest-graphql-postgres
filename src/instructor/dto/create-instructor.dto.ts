import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInstructorDto {
  @Field()
  name: string;

  @Field()
  position: string;
}
