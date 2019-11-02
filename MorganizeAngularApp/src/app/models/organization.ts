
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Membership } from 'src/app/models/membership';
import { Account } from 'src/app/models/loginPost';
import { Tag } from './tag';
export class Organization
{

    
    id:number;
    name:string;
    description:string;
    members:Array<Membership>;
    events:Array<MorganizeEvent>;
    tags:Tag[];

    constructor(){
      this.tags = [];
    };

    static createOrganization(or:Organization){
        let o = new Organization();  

        o.id = or.id;
        o.name = or.name;
        o.description = or.description;
        o.tags = or.tags;

        return o;
      }
}