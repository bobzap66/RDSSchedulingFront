import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginComponent } from '../components/login/login.component';
import { LoginCredentials } from '../models/loginPost';
import { MorganizeEvent } from '../models/morganizeEvent';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService 
{
  emptyLogin:LoginCredentials = new LoginCredentials(0, "", "", "", "" ,[]);
  emptyEvents:MorganizeEvent[];

  private source  = new BehaviorSubject<LoginCredentials>(this.emptyLogin);
  currentFetch = this.source.asObservable();

  private source2  = new BehaviorSubject<MorganizeEvent[]>(this.emptyEvents);
  currentFetch2 = this.source2.asObservable();

  constructor() 
  {

   }

   changeMessage(loginCre: LoginCredentials)
   {
     this.source.next(loginCre);
     
   }
   changeSearchable(emptyEvents: MorganizeEvent[])
   {
      return this.source2.next(emptyEvents)
   }
}
