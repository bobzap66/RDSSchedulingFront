import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from 'src/app/models/loginPost';
import { Observable, Subscription } from 'rxjs';
import { logging } from 'protractor';






@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  login_url:string = "";
  local_url:string = "";
  lcJson:string = "";
  currentUser:LoginCredentials = new LoginCredentials(0, "", "", "", "", []);
  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/login";
    this.local_url = "http://localhost:9999/login";
   }

   headers = new HttpHeaders({ 'Content-Type':'application/json' });

    sendLoginInformation(lc:LoginCredentials, token:boolean)
    {
      
      let num:number = 0;
         this.http.post<LoginCredentials>(this.local_url, lc, {headers:this.headers}).subscribe(
      (response:LoginCredentials) =>
      {
         this.currentUser.id = response.id;
         this.currentUser.name = response.name;
         this.currentUser.username = response.username;
         this.currentUser.password = response.password;
         this.currentUser.email = response.email;
         this.currentUser.groups = response.groups;
         
       });
          console.log(this.currentUser);
          //route somewhere passing along this.currentUser
       
    }

  
  
}