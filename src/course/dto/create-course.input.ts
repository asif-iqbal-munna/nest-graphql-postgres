import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  title: string;

  @Field()
  duration: string;

  @Field()
  price: number;

  @Field()
  instructorId: number;
}
