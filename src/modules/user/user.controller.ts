import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    @ApiBody({ type: CreateUserDto })
    async create(@Body () createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAll() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') userId: string) {
        return this.userService.getUser(userId);
    }

    @Put(':id')
    async putUser(@Param('id') userId: string, @Body() updateUserDto: Partial<CreateUserDto>){
        return this.userService.putUser(userId, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') userId: string){
        return this.userService.deleteUser(userId);
    }
    
}