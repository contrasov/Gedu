import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { Subject, SubjectSchema } from './subject.schema';
import { CourseModule } from '../course/course.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    CourseModule
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
