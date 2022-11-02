import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import { createSecureServer } from 'http2';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Get()
	getUsers() : Promise<Users[]>{
		return this.usersService.getUsers();
	}

	@Post()
	createUser(@Body() createUserDto : CreateUserDto) : Promise<Users[]>{
		return this.usersService.createUser(createUserDto);
	}

	@Get('/:id')
	getUserById(@Param('id') id : number): Promise<Users>{
		return this.usersService.getUserById(id);
	}

	@Delete('/:id')
	deleteUserById(@Param('id') id : number): Promise<Users[]>{
		return this.usersService.deleteUserById(id);
	}


	@Put('/:id')
	updateUserById(@Param('id') id : number, @Body() updateUserDto : UpdateUserDto) : Promise<Users[]>{
		return this.usersService.updateUserById(id, updateUserDto);
	}
}
