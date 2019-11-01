import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser:Account;
  constructor(private router:Router, private transfer:DataServiceService) { }

  searchQuery(type:string, criteria:string)
  {
     if(type === "Organization")
     {
       this.router.navigate(["/results/organizations"], {queryParams: {tag: criteria}});
     }
     if(type === "Event")
     {
       this.router.navigate(["/results/events"], {queryParams: {tag: criteria}});
     }
  }

  routeToCreateEvent()
  {
    this.router.navigate([`/users/${this.currentUser.id}/events/createEvent`]);
  }

  routeToCreateOrganization()
  {
    this.router.navigate([`/users/${this.currentUser.id}/organizations/createOrganiation`])
  }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
  }

}
