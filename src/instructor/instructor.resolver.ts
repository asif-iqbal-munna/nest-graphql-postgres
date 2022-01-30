import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { Instructor } from './entities/instructor.entity';
import { InstructorService } from './instructor.service';

@Resolver(() => Instructor)
export class InstructorResolver {
  constructor(private instructorService: InstructorService) {}

  @Query(() => [Instructor], { name: 'getAllInstructors' })
  findAll(): Promise<Instructor[]> {
    return this.instructorService.findAll();
  }

  @Mutation(() => Instructor, { name: 'makeInstructor' })
  async makeInstructor(
    @Args('instructorInput') instructor: CreateInstructorDto,
  ): Promise<Instructor> {
    return await this.instructorService.makeInstructor(instructor);
  }

  @Query(() => Instructor, {name: "getSingleInstructor"})
  findOne(@Args('id') id: number) {
    return this.instructorService.findOne(id);
  }
}
