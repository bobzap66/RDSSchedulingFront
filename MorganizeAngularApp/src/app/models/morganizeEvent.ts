import { Appointment } from './appointment';
import { Account } from './loginPost'; 
import { Tag } from './tag';
import { Organization } from './organization';

export class MorganizeEvent{
  
  id:number;
  name:string;
  startdate:number;
  enddate:number;
  description:string;
  maxattendees:number;
  location:string;
  organization:Organization; //TODO replace with organization object
  tags:Tag[];


  constructor(){
    this.tags = []

  }

  static createEvent(ev:MorganizeEvent){
    let e = new MorganizeEvent();  
    
    e.id = ev.id;
    e.name = ev.name;
    e.startdate = ev.startdate;
    e.enddate = ev.enddate;
    e.description = ev.description;
    e.maxattendees = ev.maxattendees;
    e.location = ev.location;
    e.organization = ev.organization;

    e.tags = ev.tags

    return e;
  }

}
