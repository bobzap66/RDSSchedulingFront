import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';
import { switchMap } from 'rxjs/operators';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { EventService } from 'src/app/services/event.service';
import { DataServiceService} from 'src/app/services/data-service.service'; 
import { Account } from 'src/app/models/loginPost';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  organization:Organization;
  currentUser:Account; 
  mySubscription:any;

  constructor(private transfer:DataServiceService, private eventService:EventService, private route:ActivatedRoute, private router:Router, private orgService:OrganizationService) {

    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        console.log(paramMap.get("o_id"));
        this.orgService.getOrganization(parseInt(paramMap.get('o_id')))
        .then((response) => {
          this.organization = Organization.createOrganization(response);
          console.log(this.organization);
        }).then(() =>
          this.eventService.getOrganizationEvents(parseInt(paramMap.get('o_id')))
          .then((response) =>{
            this.organization.events = response.map((ev) => MorganizeEvent.createEvent(ev))
          })
        ).then(()=>{
          this.orgService.getOrganizationMembers(parseInt(paramMap.get('o_id')))
          .then((response)=> {
            this.organization.members = response;
          })
        });
      
      }
    );


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
  
   //joinOrganization
   joinOrganization(){
     this.organization.id;
     this.orgService.registerForOrganization(this.organization.id, this.currentUser).then((response) => {      
     this.organization = Organization.createOrganization(response);
     this.router.navigate([`/organizations/${this.organization.id}`])
    });
     
  }

  leaveOrganization(){
    this.orgService.leaveOrganization(this.organization.id, this.currentUser.id).then(()=>
      this.router.navigate([`/organizations/${this.organization.id}`])
    );
    
  }

  editOrganization():void{
    this.router.navigate([`/users/${this.currentUser.id}/organizations/${this.organization.id}`])
  }

  isAdmin():boolean{
    if(this.currentUser && this.organization){
      let userIsAdmin:boolean = this.organization.members.reduce((a,b)=>a || (b.account.id === this.currentUser.id && b.type === "ADMIN"), false)
      return userIsAdmin;
    }
    return false;
  }
   
  isMember():boolean{
    if(this.currentUser && this.organization){
      let userIsMember:boolean = this.organization.members.reduce((a,b)=>a || (b.account.id === this.currentUser.id), false)
      return userIsMember;
    }
    return false;
  }

  ngOnInit() {
    
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
  }

}
