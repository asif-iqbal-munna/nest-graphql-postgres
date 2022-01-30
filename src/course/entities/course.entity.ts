import { Field, ObjectType } from '@nestjs/graphql';
import { Instructor } from 'src/instructor/entities/instructor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Course {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  duration: string;

  @Field()
  @Column()
  price: number;

  @ManyToOne(() => Instructor, (instructor) => instructor.courses)
  @Field(() => Instructor, { nullable: true })
  instructor: Instructor;

  // @Column()
  // @Field()
  // instructorId: number;
}
