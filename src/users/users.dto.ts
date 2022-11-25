import {
	IsNotEmpty,
	IsNumber,
	IsString,
	Matches,
	MaxLength,
	MinLength,
  } from 'class-validator';

export class SignupUserDto {
	
	@IsNumber()
	@IsNotEmpty()
	id: number; 

	@IsString()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	psassword: string; 

	@IsString()
	@IsNotEmpty()
	name: string; 
}
  
export class LoginUserDto{

	@IsString()
	@IsNotEmpty()
	email : string; 

	@IsString()
	@IsNotEmpty()
	password : string; 
}