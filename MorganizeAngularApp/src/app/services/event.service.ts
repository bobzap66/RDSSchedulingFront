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

  headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999";
    this.local_url = "http://localhost:9999";
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
    return this.http.get<Appointment[]>(`${this.local_url}/users/${u_id}`).toPromise();

  }
  
  // /users/{u_id}/events POST
  createUserEvent(u_id:number, ev:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.local_url}/users/${u_id}`, ev, {headers: this.headers}).toPromise();
  };


  // // /users/{u_id}/events/{e_id} GET
  // getAdministeredEvent(e_id:number):Promise<MorganizeEvent>{
    
  //   event:Promise<MorganizeEvent> = this.getEvent(event);
    

  //   return event;
  // }

  // /users/{u_id}/events/{e_id} PUT
  updateAdministeredEvent(u_id, event:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.put<MorganizeEvent>(`${this.local_url}/users/${u_id}/events/${event.e_id}`, event, {headers: this.headers}).toPromise();
  }

  // /users/{u_id}/events/{e_id} DELETE
  deleteAdministeredEvent(u_id:number, e_id:number):Promise<boolean>{
    return this.http.delete<boolean>(`${this.local_url}/users/${u_id}/events/${e_id}`).toPromise();
  }

  // /events GET
  searchEvents(tag:string):Promise<MorganizeEvent[]>{
    return this.http.get<MorganizeEvent[]>(`${this.local_url}/events?tag=${tag}`).toPromise();
  }

  // /events/{e_id} GET
  getEvent(e_id:number):Promise<MorganizeEvent>{
    return this.http.get<MorganizeEvent>(`${this.local_url}/events/${e_id}`).toPromise();
  }

  // /events/{e_id} POST
  registerForEvent(user:Account, e_id:number):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.local_url}/events/${e_id}`, user, {headers: this.headers}).toPromise();
  }
  
  // /organzations/{o_id}/events GET
  getOrganizationEvents(o_id:number):Promise<MorganizeEvent[]>{
    return this.http.get<MorganizeEvent[]>(`${this.local_url}/organizeations/${o_id}/events`).toPromise();
    
  }

  // /organzations/{o_id}/events POST
  createOrganizationEvent(o_id:number, event:MorganizeEvent):Promise<MorganizeEvent>{
    return this.http.post<MorganizeEvent>(`${this.local_url}/organizations/${o_id}`, event, {headers: this.headers}).toPromise();
  
  }

  


  

}
