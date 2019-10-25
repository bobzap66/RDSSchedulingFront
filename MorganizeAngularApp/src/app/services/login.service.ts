import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from 'src/app/models/loginPost';


@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  login_url:string = "";
  lcJson:string = "";

  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/login";
   }

   headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    sendLoginInformation(lc:LoginCredentials):Promise<LoginCredentials>
    {
       this.lcJson = JSON.stringify(lc);
       let response:Promise<LoginCredentials> = this.http.post<LoginCredentials>(this.login_url, this.lcJson, {headers:this.headers}).toPromise();
       return response;
    }
  
}
