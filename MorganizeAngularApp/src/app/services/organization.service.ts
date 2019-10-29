import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from 'src/app/models/loginPost';
import { Organization } from 'src/app/models/organization';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  NavigationExtras
}                                 from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  remote_url:string = "";
  local_url:string = "";
  static user = new Subject<LoginCredentials>();

  constructor(private http:HttpClient) 
  {
    this.remote_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/";
    this.local_url = "http://localhost:9999/";
   }

  /*
 API endpoints handled in this service
 /user/{u_id}/organizations
   GET : show user's associated organizations
   POST : create a new organization with the user as admin
 /user/{u_id}/organizations{o_id}
   GET : display the data that holds the information about an organization overseen by the given user as the default administrator in change of managing the aforementioned organization
   PUT : update organization details
   DELETE : delete an organization
 /organizations
   GET : show all organizations, searching by URL parameters
 /organizations/{o_id}
   GET : get organization details
   POST : register for an organization
   PUT : promote to admin
 */

 headers = new HttpHeaders({ 'Content-Type':'application/json'});

 sendCreateOrganization(organization:Organization, user:LoginCredentials):Organization {
   this.http.post<Organization>(`${this.remote_url}/${user.id}`, organization, {headers:this.headers}).subscribe(
     (response:Organization) => {
       organization.o_id = response.o_id;
     });
     return organization;
  
 }

 
  sendGetOrganizations(user:LoginCredentials):Array<Organization> {
    let organizations:Array<Organization>;
    this.http.get<Array<Organization>>(`${this.remote_url}/${user.id}`, {headers:this.headers}).subscribe(
      (response:Array<Organization>) => {
      for(let i = 0; i < response.length; i++) {
        let organization:Organization;
          organization.name = response[i].name;
          organization.description = response[i].description;
          organization.members = response[i].members.map((account:any)=>account.username);
``
        }
      
      });
    return organizations;
 
  }

}

