import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { Instructor } from './entities/instructor.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,
  ) {}
  async findAll(): Promise<Instructor[]> {
    return await this.instructorRepository.find({ relations: ['courses'] });
  }

  async makeInstructor(instructor: CreateInstructorDto): Promise<Instructor> {
    return await this.instructorRepository.save(instructor);
  }

  async findOne(id) {
    return await this.instructorRepository.findOne(id, {relations: ['courses']});
  }
}
