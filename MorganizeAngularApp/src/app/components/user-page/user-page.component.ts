import { Component, OnInit, Output, ViewChild, ɵConsole } from '@angular/core';
import { Account } from 'src/app/models/loginPost';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SearchService } from 'src/app/services/search.service'
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit 
{
  currentUser:Account; 
  searchBy:string;
  typeOfSearch:string;
  events:MorganizeEvent[];


  constructor(private transfer:DataServiceService, private transferSearch:DataServiceService, private search:SearchService, private router:Router)
   {
      
     
   } 

   searchQuery(type:string, criteria:string)
   {
      if(type === "Organization")
      {

      }
      if(type === "Event")
      {
        this.search.searchEvent(criteria);
        this.router.navigate(["/results"]);
      }
   }

   

  ngOnInit() 
  {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
    console.log(this.currentUser);
  }

}

