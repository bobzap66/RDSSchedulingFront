import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Organization } from '../models/organization';
import { Appointment } from '../models/appointment';


@Injectable({
  providedIn: 'root'
})
export class SearchService 
{
  login_url:string = "";
  local_url:string = "";
  events:MorganizeEvent[];
  orgs:Organization[];
  current_url:string;
 

  constructor(private http:HttpClient, private transferSearch:DataServiceService) 
  {
    this.login_url = "http://ec2-18-222-175-89.us-east-2.compute.amazonaws.com:9999";
    this.local_url = "http://localhost:9999";
    this.current_url = this.login_url;
   
  }

  headers = new HttpHeaders({ 'Content-Type':'application/json' });

  searchEvent(input:string)
  {
    let include = "";
    if(input !== "")
    {
        include += `?tag=${input}`;
    }
    
    this.http.get<any[]>(`${this.current_url}/events${include}`).subscribe((response) => 
    {
      this.events = response;
      this.transferSearch.changeSearchable(this.events);
    });
  }

  searchOrganizations(input:string)
  {
    let include = "";
    if(input !== "")
    {
        include += `?tag=${input}`;
    }
    
    this.http.get<any[]>(`${this.current_url}/organizations${include}`).subscribe((response) => 
    {
      this.orgs = response;
      this.transferSearch.listOfOrganizations(this.orgs);
    });
  }
  }





