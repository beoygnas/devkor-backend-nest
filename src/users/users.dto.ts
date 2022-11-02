import {
	IsNotEmpty,
	IsNumber,
	IsString,
	Matches,
	MaxLength,
	MinLength,
  } from 'class-validator';

export class CreateUserDto {
	
	@IsNumber()
	@IsNotEmpty()
	id: number; 

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsNumber()
	@IsNotEmpty()
	age: number; 

	@IsNumber()
	@IsNotEmpty()
	role: string; 
}
  
export class UpdateUserDto{

	@IsNumber()
	@IsNotEmpty()
	age: number; 

	@IsNumber()
	@IsNotEmpty()
	role: string; 
}