import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MorganizeEvent } from '../models/morganizeEvent';
import { Account } from '../models/loginPost';
import { Appointment } from '../models/appointment';
import { DataServiceService } from './data-service.service';//delete after test


@Injectable({
  providedIn: 'root'
})
export class EventService {

  login_url = "";
  local_url = "";
  current_url:string;

  headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-18-222-175-89.us-east-2.compute.amazonaws.com:9999";
    this.local_url = "http://localhost:9999";
    this.current_url = this.login_url;
  }

  /*
  API endpoints handled in this service
  /user/{u_id}/events
    GET : show user's associated events
    POST : create a new event with the user as admin
  /user/{u_id}/events{e_id}
    GET : show event details for an event the user is an admin of
    PUT : update event details
    DELETE : delete an event
  /events
    GET : show all events, searching by URL parameters
  /events/{e_id}
    GET : get event details
    POST : register for an event
  /organizations/{o_id}/events
    GET : get organizations hosted events
    POST : create an event hosted by the organization  
  */

 
  // /users/{u_id}/events GET

  getUserAppointments(u_id:number):Promise<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.current_url}/users/${u_id}/events`).toPromise();

  }

  
  // /users/{u_id}/events POST
  createUserEvent(u_id:number, ev:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.current_url}/users/${u_id}/events`, ev, {headers: this.headers}).toPromise();
  };


  // // /users/{u_id}/events/{e_id} GET
  // getAdministeredEvent(e_id:number):Promise<MorganizeEvent>{
    
  //   event:Promise<MorganizeEvent> = this.getEvent(event);
    

  //   return event;
  // }

 

  // /users/{u_id}/events/{e_id} PUT
  updateAdministeredEvent(u_id, event:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.put<MorganizeEvent>(`${this.current_url}/users/${u_id}/events/${event.id}`, event, {headers: this.headers}).toPromise();
  }

  // /users/{u_id}/events/{e_id} DELETE
  deleteAdministeredEvent(u_id:number, e_id:number):Promise<boolean>{
    return this.http.delete<boolean>(`${this.current_url}/users/${u_id}/events/${e_id}`).toPromise();
  }


  // /events GET
  searchEvents(tag:string):Promise<MorganizeEvent[]>
  {
    let include = "";
    if(tag !== "")
    {
        include += `?tag=${tag}`;
    }
    return this.http.get<MorganizeEvent[]>(`${this.current_url}/events${include}`).toPromise();
  }

  // /events/{e_id} GET
  getEvent(e_id:number):Promise<MorganizeEvent>{
    return this.http.get<MorganizeEvent>(`${this.current_url}/events/${e_id}`).toPromise();
  }

   //leaveAnEvent()
   leaveAnEvent(user:Account, e_id:number):Promise<boolean>{
    return this.http.delete<boolean>(`${this.current_url}/events/${e_id}/appointments/${user.id}`).toPromise();
  }

  // /events/{e_id} POST
  registerForEvent(user:Account, e_id:number):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.current_url}/events/${e_id}`, user, {headers: this.headers}).toPromise();
  }
  
  // /organization/{o_id}/events GET
  getOrganizationEvents(o_id:number):Promise<MorganizeEvent[]>{
    return this.http.get<MorganizeEvent[]>(`${this.current_url}/organizations/${o_id}/events`).toPromise();
    
  }

  // /organzations/{o_id}/events POST
  createOrganizationEvent(o_id:number, event:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.current_url}/organizations/${o_id}`, event, {headers: this.headers}).toPromise();
  
  }

  getAppointmentByEvent(e_id:number):Promise<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.current_url}/events/${e_id}/appointments`).toPromise();
  }

  filterEventsByTime(events:MorganizeEvent[]):MorganizeEvent[]{
    return events.filter((ev)=>ev.startdate>Date.now())
  }

  filterAppointmentsByTime(appointments:Appointment[]):Appointment[]{
    console.log(appointments);
    if(!appointments){
      return [];
    }
    return appointments.filter((appt)=>appt.event.startdate>Date.now())
  }

  


  

}
