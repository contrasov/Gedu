import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from "mongoose";

@Schema({collection: 'courses'})
export class Course extends Document {
    @Prop({required: true})
    code: string;

    @Prop({required: true})
    name: string;
    
    @Prop({required: false})
    description: string;
    
    @Prop({required: true})
    semesterDuration: number;
    
    @Prop({required: true})
    status: boolean;

    @Prop({type: mongoose.Schema.Types.ObjectId, required: true })
    subjectId: ObjectId;
    
    @Prop({type: Date, default: Date.now})
    dateCreate: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);