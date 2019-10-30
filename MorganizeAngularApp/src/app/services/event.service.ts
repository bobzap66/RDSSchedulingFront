import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MorganizeEvent } from '../models/morganizeEvent';
import { LoginCredentials } from '../models/loginPost';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  login_url = "";
  local_url = "";

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
  getUserEvents(user:LoginCredentials):MorganizeEvent[]{
    let uri:string = `/users/${user.id}/events`;
    let events:MorganizeEvent[];
    this.http.get(this.local_url + uri).subscribe(
      function (response:MorganizeEvent[]){
        events = response.map((e) => MorganizeEvent.createEvent(e));
      }
    );

    return events;
  }

  // /users/{u_id}/events POST
  createUserEvent(user:LoginCredentials, ev:MorganizeEvent):MorganizeEvent{
    let uri:string = `/users/${user.id}/events`;
    let headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

    this.http.post(this.local_url+uri, ev, {headers:headers}).subscribe(
      function(response:MorganizeEvent){
        ev = MorganizeEvent.createEvent(response);
      }

    );
    return ev;
  }

  // /users/{u_id}/events/{e_id} GET
  getAdministeredEvent(user:LoginCredentials, event:MorganizeEvent):MorganizeEvent{
    let uri:string = `/users/${user.id}/events/${event.id}`;
    this.http.get(this.local_url + uri).subscribe(
      function (response:MorganizeEvent){
        event = MorganizeEvent.createEvent(response);
      }
    );

    return event;
  }

  // /users/{u_id}/events/{e_id} PUT
  updateAdministeredEvent(user:LoginCredentials, event:MorganizeEvent):MorganizeEvent{
    let uri:string = `/users/${user.id}/events/${event.id}`;
    let headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

    this.http.put(this.local_url+uri, event, {headers:headers}).subscribe(
      function(response:MorganizeEvent){
        event = MorganizeEvent.createEvent(response);
      }

    );
    return event;
  }

  // /users/{u_id}/events/{e_id} DELETE
  deleteAdministeredEvent(user:LoginCredentials, event:MorganizeEvent):void{
    let uri:string = `/users/${user.id}/events/${event.id}`;
    this.http.delete(this.local_url+uri);
    return;
  }

  // /events GET
  searchEvents(tag:string):MorganizeEvent[]{
    let events:MorganizeEvent[];
    let uri:string = `/events?tag=${tag}`
    this.http.get(this.local_url+uri).subscribe(
      function(response:MorganizeEvent[]){
        events = response.map((e)=>MorganizeEvent.createEvent(e));
      }
    )
    return events;
  }

  // /events/{e_id} GET
  getEvent(event:MorganizeEvent):MorganizeEvent{
    let uri:string = `/events/${event.id}`;
    this.http.get(this.local_url+uri).subscribe(
      function(response:MorganizeEvent){
        event = MorganizeEvent.createEvent(response);
      }
    )
    return event;
  }

  // /events/{e_id} POST
  registerForEvent(user:LoginCredentials, event:MorganizeEvent):MorganizeEvent{
    let uri:string = `/events/${event.id}`;
    let headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

    this.http.post(this.local_url+uri, user, {headers:headers}).subscribe(
      function(response:MorganizeEvent){
        event = MorganizeEvent.createEvent(response);
      }

    );

    return event;
  }
  
  // /organzations/{o_id}/events GET
  getOrganizationEvents(organization:any):MorganizeEvent[]{
    let uri:string = `/users/${organization.id}/events`;
    let events:MorganizeEvent[];
    this.http.get(this.local_url + uri).subscribe(
      function (response:MorganizeEvent[]){
        events = response.map((e) => MorganizeEvent.createEvent(e));
      }
    );

    return events;
  }

  // /organzations/{o_id}/events POST
  createOrganizationEvent(organization:any, event:MorganizeEvent):MorganizeEvent{
    let uri:string = `/users/${organization.id}/events`;
    let headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });

    this.http.post(this.local_url+uri, event, {headers:headers}).subscribe(
      function(response:MorganizeEvent){
        event = MorganizeEvent.createEvent(response);
      }

    );
    return event;
  }

  


  

}