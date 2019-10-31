import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';

@Component({
  selector: 'app-update-event-page',
  templateUrl: './update-event-page.component.html',
  styleUrls: ['./update-event-page.component.css']
})
export class UpdateEventPageComponent implements OnInit {

  event:MorganizeEvent;

  constructor(private route:ActivatedRoute, private router:Router, private eventService:EventService) {
    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        console.log(paramMap.get("u_id"));
        this.eventService.getEvent(parseInt(paramMap.get('e_id')))
        .then((response) => {
          this.event = MorganizeEvent.createEvent(response);
        });
      
      }
    );
   }

  ngOnInit() {
  }

}
