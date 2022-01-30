import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => Course, {name: "createCourse"})
  createCourse(@Args('createCourseInput') course: CreateCourseInput) {
    return this.courseService.create(course);
  }

  @Query(() => [Course], { name: 'getAllCourses' })
  findAll() {
    return this.courseService.findAll();
  }

  @Query(() => Course, { name: 'getSingleCourse' })
  findOne(@Args('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Mutation(() => Course)
  updateCourse(@Args('updateCourseInput') course: UpdateCourseInput) {
    return this.courseService.update(course.id, course);
  }

  @Mutation(() => Course)
  removeCourse(@Args('id', { type: () => Int }) id: number) {
    return this.courseService.remove(id);
  }
}
