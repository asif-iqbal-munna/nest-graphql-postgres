import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import typeormConfig from './../ormconfig';
import { CourseModule } from './course/course.module';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sortSchema: true,
    }),
    InstructorModule,
    CourseModule,
  ],
})
export class AppModule {}
