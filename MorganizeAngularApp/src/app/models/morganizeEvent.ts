import { Appointment } from './appointment';
import { Account } from './loginPost'; 

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
  tags:any[];

  admins:Account[];
  attendees:Account[];


  constructor(){

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

    e.tags = ev.tags.map((tag) => tag.tag);

    e.admins = ev.appointments.filter((appt)=>appt.type === "ADMIN").map((appt)=>appt.account);
    e.attendees = ev.appointments.filter((appt)=>appt.type === "MEMBER").map((appt)=>appt.account);

    return e;
  }

}
