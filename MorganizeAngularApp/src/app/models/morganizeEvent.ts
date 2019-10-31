import { Appointment } from './appointment';
import { Account } from './loginPost'; 

export class MorganizeEvent{
  
  e_id:number;
  name:string;
  startDate:number;
  endDate:number;
  description:string;
  maxAttendees:number;
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
    
    e.e_id = ev.e_id;
    e.name = ev.name;
    e.startDate = ev.startDate;
    e.endDate = ev.endDate;
    e.description = ev.description;
    e.maxAttendees = ev.maxAttendees;
    e.location = ev.location;
    e.organization = ev.organization;
    e.appointments = ev.appointments;

    e.tags = ev.tags.map((tag) => tag.tag);

    e.admins = ev.appointments.filter((appt)=>appt.type === "ADMIN").map((appt)=>appt.account);
    e.attendees = ev.appointments.filter((appt)=>appt.type === "MEMBER").map((appt)=>appt.account);

    return e;
  }

}
