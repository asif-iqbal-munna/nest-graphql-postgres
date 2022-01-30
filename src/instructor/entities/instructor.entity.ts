import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Course } from 'src/course/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@ObjectType()
@Entity('instructors')
export class Instructor {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  position: string;

  @OneToMany(() => Course, (course) => course.instructor)
  @Field(() => [Course], { nullable: true })
  courses: Course[];
}
