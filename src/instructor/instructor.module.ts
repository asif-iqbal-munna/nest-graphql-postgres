import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './entities/instructor.entity';
import { InstructorResolver } from './instructor.resolver';
import { InstructorService } from './instructor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  providers: [InstructorResolver, InstructorService],
  exports: [InstructorService],
})
export class InstructorModule {}
