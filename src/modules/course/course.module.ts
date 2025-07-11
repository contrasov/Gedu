import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Course.name, schema: CourseSchema}]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService, MongooseModule]
})
export class CourseModule {}
