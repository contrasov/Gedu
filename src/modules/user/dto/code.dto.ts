import { ApiProperty } from "@nestjs/swagger";
import { UserType } from "src/modules/user/user.schema";
import { IsEnum, IsString, IsOptional } from "class-validator";
import { ObjectId } from "mongoose";

export class CodeDto {
    @ApiProperty({enum: UserType})
    @IsEnum(UserType)
    type: UserType;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    courseId: ObjectId;
}

export class VerifyCodeDto {
    @ApiProperty()
    @IsString()
    code: string;
}