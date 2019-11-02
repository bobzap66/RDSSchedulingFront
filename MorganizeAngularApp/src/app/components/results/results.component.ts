import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Organization } from 'src/app/models/organization';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  display:any[];
  searchType:string;

  constructor(private transferSearch:DataServiceService, private route:ActivatedRoute, private router:Router, private eventService:EventService, private orgService:OrganizationService) { }


  ngOnInit() 
  {
    if(this.router.url.match(/\/results\/events/i)){
      this.route.queryParamMap.subscribe(queryParams => {
        this.eventService.searchEvents(queryParams.get("tag")).then((response)=>
          this.display = response.map((ev) => MorganizeEvent.createEvent(ev))
        );
        this.searchType = 'events';
      });
      
    }else if(this.router.url.match(/\/results\/organizations/i)){
      this.route.queryParamMap.subscribe(queryParams => {
        this.orgService.searchOrganizations(queryParams.get("tag")).then((response)=>
          this.display = response.map((org) => Organization.createOrganization(org))
        );
        this.searchType = 'organizations';
      });
      
    }else{
      console.log("invalid route")
    }
    
  }

}
