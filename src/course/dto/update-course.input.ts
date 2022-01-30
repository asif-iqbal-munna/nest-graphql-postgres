import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateCourseInput } from './create-course.input';

@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @Field(() => Int)
  id: number;
  
  @Field()
  title: string;

  @Field()
  duration: string;

  @Field()
  price: number;
}
