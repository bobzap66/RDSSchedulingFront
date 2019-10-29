export class MorganizeEvent{
  
  id:number;
  name:string;
  startDate:number;
  endDate:number;
  description:string;
  maxAttendees:number;
  location:string;
  organization:Object; //TODO replace with organization object
  appointments:Object[];

  admins:Object[];
  attendees:Object[];


  constructor(){

  }

  static createEvent(ev:MorganizeEvent){
      //TODO convert from json response to js object
  }

}
