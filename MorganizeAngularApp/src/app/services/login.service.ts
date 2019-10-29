import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from 'src/app/models/loginPost';
import { Subject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  login_url:string = "";
  local_url:string = "";
  lcJson:string = "";
  static user = new Subject<LoginCredentials>();
  
  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/login";
    this.local_url = "http://localhost:9999/login";
   }

   headers = new HttpHeaders({ 'Content-Type':'application/json' });

    sendLoginInformation(lc:LoginCredentials):LoginCredentials
    {
         this.http.post<LoginCredentials>(this.local_url, lc, {headers:this.headers}).subscribe(
      (response:LoginCredentials) =>
      {
         lc.id = response.id;
         lc.name = response.name;
         lc.email = response.email;
         lc.groups = response.groups;
         
       });
       
         return lc;
          
       
    }

  
  
}