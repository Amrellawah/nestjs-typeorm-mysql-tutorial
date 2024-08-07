import { Controller, Post, Get, Body, ParseIntPipe, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { createUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    getUsers() {
        return this.userService.findUsers(); 
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
         this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(
        @Param('id' , ParseIntPipe) id: number, 
        @Body() updateUserDto: UpdateUserDto,
    ) {
       await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id' , ParseIntPipe) id: number) {
       await this.userService.deleteUser(id);
    }

    @Post(':id/profiles')
    createUserProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: CreateUserProfileDto,
    ){
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(':id/posts')
    createUserPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserPostDto: createUserPostDto,
    ){
        return this.userService.createUserPost(id, createUserPostDto);
    }
} 