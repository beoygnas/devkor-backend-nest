
export class User {
	name : string;
	id : number;
    age : number;
    role : string;
    
	constructor(name : string, id : number, age : number, role : string){
		this.name = name;
		this.id = id;
        this.age = age;
        this.role = role;
	}
}
