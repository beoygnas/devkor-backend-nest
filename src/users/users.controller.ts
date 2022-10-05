import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';
import { createSecureServer } from 'http2';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Get()
	getUsers() : User[]{
		return this.usersService.getUsers();
	}

	@Post()
	createUser(@Body() body) : User[]{
		this.usersService.createUser(body);
		return this.usersService.getUsers();
	}

	@Get('/:id')
	getUserById(@Param('id') id : number): User{
		return this.usersService.getUserById(id);
	}

	@Delete('/:id')
	deleteUserById(@Param('id') id : number): User[]{
		this.usersService.deleteUserById(id);
		return this.usersService.getUsers();
	}


	@Put('/:id')
	updateUserById(@Param('id') id : number, @Body() body) : User[]{
		this.usersService.updateUserById(id, body.age, body.role);
		return this.usersService.getUsers();
	}
}
