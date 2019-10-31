import { Component, OnInit, Output, ViewChild, ɵConsole } from '@angular/core';
import { Account } from 'src/app/models/loginPost';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SearchService } from 'src/app/services/search.service'
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Appointment } from 'src/app/models/appointment';
import { Membership } from 'src/app/models/membership';
import { OrganizationService } from 'src/app/services/organization.service';

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
  appointments:Appointment[];
  memberships:Membership[];



  constructor(private transfer:DataServiceService, private search:SearchService, private router:Router, private eventService:EventService, private organizationService:OrganizationService)
   {
      
    
     
   } 

   searchQuery(type:string, criteria:string)
   {
      if(type === "Organization")
      {
        this.search.searchOrganizations(criteria);
        this.router.navigate(["/results/organizations"]);
      }
      if(type === "Event")
      {
        this.search.searchEvent(criteria);
        this.router.navigate(["/results/events"]);
      }
   }

  

  ngOnInit() 
  {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
  }

}

