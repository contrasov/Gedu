import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Subject } from "./subject.schema";
import { SubjectDto } from "./dto/subject.dto";

@Injectable()
export class SubjectService {
    constructor(@InjectModel(Subject.name) private subjectModel: Model<Subject>){}

    async createSubject(createSubjectDto: SubjectDto){
        const newSubject = new this.subjectModel(createSubjectDto);
        const nameInitials = createSubjectDto.name.substring(0, 3).toUpperCase();
        const randomNumbers = Math.floor(1000 + Math.random() * 5000)
        const code = `${nameInitials}${randomNumbers}`;
        newSubject.code = code;
        return await newSubject.save();
    }

    async getSubjects(){
        return await this.subjectModel.find();
    }

    async getSubject(subjectId: string){
        return await this.subjectModel.findById(subjectId);
    }

    async putSubject(subjectId: string, updateSubjectDto: Partial<SubjectDto> ){
        return await this.subjectModel.findByIdAndUpdate(subjectId, updateSubjectDto);
    }

    async deleteSubject(subjectId: string){
        return await this.subjectModel.findByIdAndDelete(subjectId)
    }
}