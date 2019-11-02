import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Organization } from 'src/app/models/organization';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
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
  mySubscription: any;

  constructor(private transferSearch:DataServiceService, private route:ActivatedRoute, private router:Router, private eventService:EventService, private orgService:OrganizationService) 
  {
    if(this.router.url.match(/\/results\/events/i)){
      this.route.queryParamMap.subscribe(queryParams => {
        this.eventService.searchEvents(queryParams.get("tag")).then((response)=>
          this.display = response.map((ev) => MorganizeEvent.createEvent(ev))
        );
        this.searchType = 'events';
      });
      
    }if(this.router.url.match(/\/results\/organizations/i)){
      this.route.queryParamMap.subscribe(queryParams => {
        this.orgService.searchOrganizations(queryParams.get("tag")).then((response)=>
          this.display = response.map((org) => Organization.createOrganization(org))
        );
        this.searchType = 'organizations';
      });
      
    }else{
      console.log("invalid route")
    }


    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });


  }


  ngOnInit() 
  {
    this.display = [];
    
  }

}
