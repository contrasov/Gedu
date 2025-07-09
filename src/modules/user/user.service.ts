import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async createUser(createUserDto: CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return await newUser.save();
    }

    async getUser(userId: string){
        return await this.userModel.findById(userId);
    }

    async getUsers(){
        return await this.userModel.find();
    }

    async putUser(userId: string, updateUserDto: Partial<CreateUserDto>){
        return await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true });
    }

    async deleteUser(userId: string){
        return await this.userModel.findByIdAndDelete(userId);
    }
}