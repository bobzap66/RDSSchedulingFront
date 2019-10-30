import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginComponent } from '../components/login/login.component';
import { Account } from '../models/loginPost';
import { MorganizeEvent } from '../models/morganizeEvent';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService 
{
  emptyLogin:Account = new Account(0, "", "", "", "" ,[]);
  emptyEvents:MorganizeEvent[];
  emptyOrgs:Organization[];

  private source  = new BehaviorSubject<Account>(this.emptyLogin);
  currentFetch = this.source.asObservable();

  private source2  = new BehaviorSubject<MorganizeEvent[]>(this.emptyEvents);
  currentFetch2 = this.source2.asObservable();

  private orginizationSource = new BehaviorSubject<Organization[]>(this.emptyOrgs);
  getOrganizationResults = this.orginizationSource.asObservable();

  constructor() 
  {

   }

   changeMessage(loginCre: Account)
   {
     this.source.next(loginCre);
     
   }
   changeSearchable(emptyEvents: MorganizeEvent[])
   {
      this.source2.next(emptyEvents)
   }

   listOfOrganizations(emptyOrgs: Organization[])
   {
     this.orginizationSource.next(emptyOrgs);
   }
}
