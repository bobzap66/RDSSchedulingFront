import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/app/models/loginPost';
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
  static user = new Subject<Account>();

  constructor(private http:HttpClient) 
  {
    this.remote_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/";
    this.local_url = "http://localhost:9999/";
   }

  /*
 API endpoints handled in this service
 /user/{u_id}/organizations
   GET : show user's associated organizations -- done
   POST : create a new organization with the user as admin --- done
 /user/{u_id}/organizations{o_id}
   GET : display the data that holds the information about an organization overseen by the 
      given user as the default administrator in change of managing the aforementioned organization -- done
   PUT : update organization details -- done
   POST : promote to admin -- done
   DELETE : delete an organization -- done
 /organizations
   GET : show all organizations, searching by URL parameters -- done
 /organizations/{o_id}
   GET : get organization details -- done
   POST : register for an organization -- done
   
 */

 headers = new HttpHeaders({ 'Content-Type':'application/json'});
 
 searchEvents(tag:string):Organization[]{
  let organizations:Organization[];
  let uri:string = `/organization?tag=${tag}`
  this.http.get(this.local_url+uri).subscribe(
    function(response:Organization[]){
      organizations = response.map((o)=>Organization.createOrganization(o));
    }
  )
  return organizations;
}
 registerForOrganization(organization:Organization, user:Account):Organization {
  this.http.post<Organization>(`${this.remote_url}/organizations/${organization.o_id}`, 
  user, {headers:this.headers}).subscribe(
    (response:Organization) => {
      organization = Organization.createOrganization(response);
    });
    return organization;
 
}

 getOrganization(o_id:number):Promise<Organization>{
  return this.http.get<Organization>(`${this.local_url}/organizations/${o_id}`).toPromise();
  
  /*.subscribe (
    (response:Organization) => {
      organization = Organization.createOrganization(response);
    }
  )
  return organization;*/
}

 promoteToAdminOfOrganization(organization:Organization, user:Account, promoted:number):Organization{
  let account:any = organization.members.find(function(element) {
    // The + in front of element.id is to force element.id to be a number
    if(+element.id === promoted) {
      return element;
    }
  });
  this.http.post<Organization>(`${this.remote_url}/users/${user.id}/organizations/${organization.o_id}`, account,
  {headers:this.headers}).subscribe (
    (response:Organization) => {
      organization = Organization.createOrganization(response);
    }
  )
  return organization;
}
 deleteOrganizationAsAdmin(organization:Organization, user:Account):void{
  this.http.delete<Organization>(`${this.remote_url}/users/${user.id}/organizations/${organization.o_id}`, 
  {headers:this.headers})
}

 updateOrganizationAsAdmin(organization:Organization, user:Account):Organization{
  this.http.post<Organization>(`${this.remote_url}/users/${user.id}/organizations/${organization.o_id}`, organization,
  {headers:this.headers}).subscribe (
    (response:Organization) => {
      organization = Organization.createOrganization(response);
    }
  )
  return organization;
}

getOrganizationAsAdmin(organization:Organization, user:Account):Promise<Organization>{
 return this.getOrganization(organization.o_id);
  //return organization;
}
 createOrganization(organization:Organization, user:Account):Organization {
   this.http.post<Organization>(`${this.remote_url}/users/${user.id}/organizations`, 
   organization, {headers:this.headers}).subscribe(
     (response:Organization) => {
      organization = Organization.createOrganization(response);
     });
     return organization;
  
 }

 
  getOrganizations(user:Account):Array<Organization> {
    let organizations:Array<Organization>;
    this.http.get<Array<Organization>>(`${this.remote_url}/users/${user.id}/organizations`, {headers:this.headers}).subscribe(
      (response:Array<Organization>) => {
      for(let i = 0; i < response.length; i++) {
        let organization:Organization;
        organization = Organization.createOrganization(response[i]);
        organizations.push(organization);
``
        }
      
      });
    return organizations;
 
  }

}

