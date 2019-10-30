import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../models/loginPost';

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

  sendCreateUser(user:Account):Account
  {
    this.http.post<Account>(this.local_url, user, {headers:this.headers}).subscribe(
      (response:Account) =>
      {
          user.id = response.id;
      });
      return user;
  }
}
