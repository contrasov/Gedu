import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
import { IsNotEmpty, IsOptional } from 'class-validator';


export class SubjectDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({required: false})
    @IsOptional()
    description: string;

    @ApiProperty({required: true})
    @IsNotEmpty()
    courseId: ObjectId;
    
    @IsNotEmpty()
    @ApiProperty()
    status: boolean;
}