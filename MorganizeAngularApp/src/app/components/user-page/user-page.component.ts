import { Component, OnInit, Output, ViewChild, ɵConsole } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SearchService } from 'src/app/services/search.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit 
{
  currentUser:LoginCredentials; 
  searchBy:string;
  typeOfSearch:string;

  constructor(private transfer:DataServiceService, private search:SearchService)
   {
      
     
   } 

   searchQuery(type:string, criteria:string)
   {
      if(type === "Organization")
      {

      }
      if(type === "Event")
      {
        let events:Observable<Event[]> = this.search.searchEvent(type);
        events.subscribe((response) =>{

        });
      }
   }

   

  ngOnInit() 
  {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
    console.log(this.currentUser);
  }

}

