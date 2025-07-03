import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../auth/dto/auth.dto';
import { User } from './user.schema';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('create')
    @ApiBody({ type: CreateUserDto })
    async create(@Body () CreateUserDto: CreateUserDto) {
        return this.userService.createUser(CreateUserDto);
    }

    @Get()
    async getAllUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') userId: string) {
        return this.userService.getUser(userId);
    }

    @Put('id')
    async putUserById(@Param('id') userId: string, @Body() updateUserDto: Partial<CreateUserDto>){
        return this.userService.putUser(userId, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') userId: string){
        return this.userService.deleteUser(userId);
    }
    
}