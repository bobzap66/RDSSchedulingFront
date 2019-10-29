export class Organization
{
    o_id:number;
    name:string;
    description:string;
    members:Array<string>;
    events:Array<any>;
    tags:Array<string>;


    constructor(o_id:number, name:string, description:string, members:Array<string>, events:Array<string>, tags:Array<string>)
    {
        this.o_id = o_id;
        this.name = name;
        this.description = description;
        this.members = members;
        this.events = events;
        this.tags = tags;
    }
}