import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorModule } from 'src/instructor/instructor.module';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), InstructorModule],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
