import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstructorService } from 'src/instructor/instructor.service';
import { Repository } from 'typeorm';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
    private instructorService: InstructorService,
  ) {}
  async create(courseDto: CreateCourseInput) {
    const instructor = await this.instructorService.findOne(courseDto.instructorId)
    const course = this.courseRepository.create({
      ...courseDto,
      instructor
    })
    return this.courseRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find({ relations:['instructor'] });
  }

  async findOne(id: number) {
    return await this.courseRepository.findOne(id, { relations:['instructor'] });
  }

  update(id: number, updateCourseInput: UpdateCourseInput) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
