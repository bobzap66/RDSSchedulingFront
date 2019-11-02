import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { DataServiceService} from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost';
import { Appointment } from 'src/app/models/appointment';



@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  event:MorganizeEvent;
  currentUser:Account;
  allAppointments:Appointment[];
  peopleAttending:Account[] = [];
  currentlyAttending:boolean = false;
  ammountAttending:number = 0;
  slotsOpen:number = 0;
  mySubscription:any;

  constructor(private transfer:DataServiceService, private route:ActivatedRoute, private router:Router, private eventService:EventService) {
    
    
    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        //console.log(paramMap.get("e_id"));
        this.eventService.getEvent(parseInt(paramMap.get('e_id')))
        .then((response) => {
          this.event = MorganizeEvent.createEvent(response);
         console.log(this.event.id);
         console.log(this.event);
         this.eventService.getAppointmentByEvent(this.event.id).then((response) =>
        {
          this.allAppointments = response;
          console.log(this.allAppointments);

          this.allAppointments.forEach(appointment=>{
            if(appointment.attending === true && appointment.account.id != this.currentUser.id)
            {
              this.peopleAttending.push(appointment.account);
              this.ammountAttending++;
            }
            if(this.currentUser.id === appointment.account.id)
            {
                this.currentlyAttending = true;
                this.ammountAttending++;
            }
        });
        this.slotsOpen = this.event.maxattendees - this.ammountAttending;
       });
        });
        
      });

    
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
 

   //joinEvents() allows a current user to register for an event
   joinEvents(){
     this.event.id;
     this.eventService.registerForEvent(this.currentUser, this.event.id);
    //console.log(this.currentUser);
   }

   leaveEvent()
   {
     //this.eventService.leaveEvent(this.currentUser, this.event.id);
   }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current); 
  }

}
