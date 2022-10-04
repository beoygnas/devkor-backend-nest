import { Injectable } from '@nestjs/common';
import {User} from './User'


@Injectable()
export class UsersService {

	
	users : User[] = [new User('sangyeob', 1, 24, "junior"), new User('seokwon', 2, 23 ,'junior'), new User('hanjoo', 3, 24, 'junior'), new User('seokmin', 4, 24, 'senior')];

	getUsers(): User[] {
		return this.users;
	}

	getUserById(id : number) : User{
		return this.users.find(x => x.id == id);
	}

	createUser(id : number, name : string, age : number, role : string){
		this.users.push(new User(name, id, age, role));
	}

	updateUserById(id : number, age : number, role : string){
		const idx = this.users.findIndex(x => x.id == id);
		if(idx > -1){
			this.users[idx].age = age;
			this.users[idx].role = role;
		}
		
	}

	deleteUserById(id : number){
		const idx = this.users.findIndex(x => x.id == id);
		if(idx > -1) this.users.splice(idx, 1);
	}




}
