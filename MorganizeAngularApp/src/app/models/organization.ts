
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Membership } from 'src/app/models/membership';
import { Account } from 'src/app/models/loginPost';
export class Organization
{

    
    o_id:number;
    name:string;
    description:string;
    members:Array<Account>;
    admins:Array<Account>;
    events:Array<MorganizeEvent>;
    tags:Array<string>;
    memberships:Array<Membership>




    constructor(){};

    static createOrganization(or:Organization){
        let o = new Organization();  

        o.o_id = or.o_id;
        o.name = or.name;
        o.description = or.description;
        o.members = or.members;
        o.events = or.events;
        o.tags = or.tags;
        o.memberships = or.memberships;
    
        o.admins = or.memberships.filter((membership)=>membership.type === "ADMIN").map((membership)=>membership.account);
        o.members = or.memberships.filter((membership)=>membership.type === "MEMBER").map((membership)=>membership.account);
    
        return o;
      }
}