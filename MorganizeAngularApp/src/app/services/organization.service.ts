import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/app/models/loginPost';
import { Organization } from 'src/app/models/organization';
import { Membership } from 'src/app/models/membership';
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

  getMemberships(account_id:number):Promise<Membership[]>
  {
    let uri:string = `users/${account_id}/organizations`
      return this.http.get<Membership[]>(`${this.local_url + uri}`).toPromise();
  }
 
  searchOrganizations(tag:string):Promise<Organization[]>{
    return this.http.get<Organization[]>(`${this.local_url}/organizations?tag=${tag}`).toPromise();
  }

  registerForOrganization(o_id:number, user:Account):Promise<Organization> {
    return this.http.post<Organization>(`${this.remote_url}/organizations/${o_id}`, 
        user, {headers:this.headers}).toPromise();
  }

  getOrganization(o_id:number):Promise<Organization>{
    return this.http.get<Organization>(`${this.local_url}/organizations/${o_id}`).toPromise();
  }

  promoteToAdminOfOrganization(u_id:number, organization:Organization, promoted:number):Promise<Organization>{
    let account:any = organization.members.find(function(element) {
      // The + in front of element.id is to force element.id to be a number
      if(+element.account.id === promoted) {
        return element;
      }
    });

    return this.http.post<Organization>(`${this.remote_url}/users/${u_id}/organizations/${organization.id}`,
        account, {headers:this.headers}).toPromise();
  }

  deleteOrganizationAsAdmin(u_id:number, o_id:number):Promise<any>{
    return this.http.delete<Organization>(`${this.remote_url}/users/${u_id}/organizations/${o_id}`, 
    {headers:this.headers}).toPromise();
  }

  updateOrganizationAsAdmin(u_id:number, organization:Organization):Promise<Organization>{
    return this.http.put<Organization>(`${this.remote_url}/users/${u_id}/organizations/${organization.id}`,
        organization, {headers:this.headers}).toPromise();
  }

  getOrganizationAsAdmin(organization:Organization, user:Account):Promise<Organization>{
    return this.getOrganization(organization.id);

  }

  createOrganization(u_id:number, organization:Organization):Promise<Organization> {
    return this.http.post<Organization>(`${this.local_url}users/${u_id}/organizations`, organization, {headers:this.headers}).toPromise();
  }

  getOrganizationMembers(o_id:number):Promise<Membership[]>{
    return this.http.get<Membership[]>(`${this.local_url}organizations/${o_id}/members`).toPromise();
  }


}

