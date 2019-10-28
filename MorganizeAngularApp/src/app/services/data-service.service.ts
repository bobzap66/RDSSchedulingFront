import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginComponent } from '../components/login/login.component';
import { LoginCredentials } from '../models/loginPost';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService 
{
  emptyLogin:LoginCredentials = new LoginCredentials(0, "", "", "", "" ,[]);
  private source  = new BehaviorSubject<LoginCredentials>(this.emptyLogin);
  currentFetch = this.source.asObservable();

  constructor() 
  {

   }

   changeMessage(loginCre: LoginCredentials)
   {
     this.source.next(loginCre);
   }
}
