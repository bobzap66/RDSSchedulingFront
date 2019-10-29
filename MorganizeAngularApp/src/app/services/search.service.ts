import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService 
{
  login_url:string = "";
  local_url:string = "";

  constructor(private http:HttpClient) 
  {
    this.login_url = "http://ec2-52-202-225-1.compute-1.amazonaws.com:9999/login";
    this.local_url = "http://localhost:9999/allEvents";
  }

  headers = new HttpHeaders({ 'Content-Type':'application/json' });

  searchEvent(input:string):Observable<Event[]>
  {
    let params = new HttpParams();
       params = params.append('input', input);

    let events:Observable<Event[]> = this.http.get<Event[]>(this.local_url, {headers:this.headers, params});

    return events;
  }



}
