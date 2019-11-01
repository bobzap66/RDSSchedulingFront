import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { DataServiceService} from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  event:MorganizeEvent;
  currentUser:Account;

  constructor(private transfer:DataServiceService, private route:ActivatedRoute, private router:Router, private eventService:EventService) {
    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        console.log(paramMap.get("e_id"));
        this.eventService.getEvent(parseInt(paramMap.get('e_id')))
        .then((response) => {
          
          this.event = MorganizeEvent.createEvent(response);
          console.log(this.event);
        });
      
      }
    );

   }


   //joinEvents() allows a current user to register for an event
   joinEvents(){
     this.event.id;
     this.eventService.registerForEvent(this.currentUser, this.event.id);
    //console.log(this.currentUser);
   }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current); 
  }

}
