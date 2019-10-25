export class LoginCredentials
{
    id:number;
    name:string;
    username:string;
    password:string;
    email:string;
    groups:Array<any>;


    constructor(id:number, name:string, username:string, password:string, email:string, groups:Array<any>)
    {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.groups = groups;
    }
}