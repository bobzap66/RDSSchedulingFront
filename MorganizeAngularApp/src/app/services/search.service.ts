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
 

  constructor(private http:HttpClient, private transferSearch:DataServiceService) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999";
    this.local_url = "http://localhost:9999";
   
  }

  headers = new HttpHeaders({ 'Content-Type':'application/json' });

  searchEvent(input:string)
  {
    let include = "";
    console.log(input);
    if(input !== "")
    {
        include += `?tag=${input}`;
    }
    
    this.http.get<any[]>(`${this.local_url}/events${include}`).subscribe((response) => 
    {
      this.events = response;
      this.transferSearch.changeSearchable(this.events);
    });
  }

  searchOrganizations(input:string)
  {
    let include = "";
    console.log(input);
    if(input !== "")
    {
        include += `?tag=${input}`;
    }
    
    this.http.get<any[]>(`${this.local_url}/organizations${include}`).subscribe((response) => 
    {
      this.orgs = response;
      this.transferSearch.listOfOrganizations(this.orgs);
    });
  }
  }





