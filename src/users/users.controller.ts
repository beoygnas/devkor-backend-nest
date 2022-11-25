import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import { createSecureServer } from 'http2';
import { SignupUserDto, LoginUserDto } from './users.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post('/signup')
	signUpUser(@Body() signupUserDto : SignupUserDto) : Promise<Map<string, string>>{
		return this.usersService.signUpUser(signupUserDto);
	}

	@Post('/login')
	LoginUpUser(@Body() loginUserDto : LoginUserDto) : Promise<Map<string, string>>{
		return this.usersService.loginUser(loginUserDto);
	}

	@Get('/:id')
	getUserById(@Param('id') id : number): Promise<Users>{
		return this.usersService.getUserById(id);
	}

	@Get('/:email')
	getUserByEmail(@Param('email') email : string): Promise<Users>{
		return this.usersService.getUserByEmail(email);
	}

	// @Delete('/:id')
	// deleteUserById(@Param('id') id : number): Promise<Users[]>{
	// 	return this.usersService.deleteUserById(id);
	// }


	// @Put('/:id')
	// updateUserById(@Param('id') id : number, @Body() loginUserDto : LoginUserDto) : Promise<Users[]>{
	// 	return this.usersService.updateUserById(id, loginUserDto);
	// }
}
