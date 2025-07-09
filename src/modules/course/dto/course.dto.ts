import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CourseDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({required: false})
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    semesterDuration: number;

    @ApiProperty({required: false})
    @IsOptional()
    subjectIds: ObjectId[];
    
    @IsNotEmpty()
    @ApiProperty()
    status: boolean;
}