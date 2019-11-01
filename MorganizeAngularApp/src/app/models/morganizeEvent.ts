import { Appointment } from './appointment';
import { Account } from './loginPost'; 
import { Tag } from './tag';

export class MorganizeEvent{
  
  id:number;
  name:string;
  startdate:number;
  enddate:number;
  description:string;
  maxattendees:number;
  location:string;
  organization:Object; //TODO replace with organization object
  appointments:Appointment[];
  tags:Tag[];

  admins:Account[];
  attendees:Account[];


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
    e.appointments = ev.appointments;

    e.tags = ev.tags

    e.admins = ev.appointments.filter((appt)=>appt.type === "ADMIN").map((appt)=>appt.account);
    e.attendees = ev.appointments.filter((appt)=>appt.type === "MEMBER").map((appt)=>appt.account);

    return e;
  }

}
