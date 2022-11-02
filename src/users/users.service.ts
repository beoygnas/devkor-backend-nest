import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import {Users} from './users.entity'


@Injectable() //다음 class는 controller로 주입될 수 있는
export class UsersService {
	
	constructor(
		@InjectRepository(Users)
		private usersRepository: Repository<Users>,
	) {}	

	async getUsers(): Promise<Users[]> {
		return await this.usersRepository.find();
	}

	async getUserById(id : number) : Promise<Users>{
		return await this.usersRepository.findOneBy({id});
	}

	async createUser(createUserDto : CreateUserDto){
		await this.usersRepository.save(createUserDto);
		return await this.usersRepository.find();
	}

	async updateUserById(id : number, updateUserDto : UpdateUserDto){

		const {age, role} = updateUserDto;
		const user = await this.usersRepository.update({id},{age, role});
		if ((user).affected !== 1) {
			throw new NotFoundException('해당 ID의 유저가 없습니다.');
		}
		return await this.usersRepository.find();
	}

	async deleteUserById(id : number){		
		const user = await this.usersRepository.delete(id);
		if (user.affected === 0) {
			throw new NotFoundException('유저가 존재하지 않습니다.');
		}	
		return await this.usersRepository.find();
	}
}	
