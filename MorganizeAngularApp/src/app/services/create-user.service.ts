import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from '../models/loginPost';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService 
{
  login_url:string = "";
  local_url:string = "";

  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/login";
    this.local_url = "http://localhost:9999/users";
  }

  headers = new HttpHeaders({ 'Content-Type':'application/json' });

  sendCreateUser(user:LoginCredentials):LoginCredentials
  {
    this.http.post<LoginCredentials>(this.local_url, user, {headers:this.headers}).subscribe(
      (response:LoginCredentials) =>
      {
          user.id = response.id;
      });
      return user;
  }
}
