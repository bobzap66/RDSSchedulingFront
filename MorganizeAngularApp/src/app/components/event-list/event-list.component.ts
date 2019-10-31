import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost';
import { SearchService } from 'src/app/services/search.service';
import { EventService } from 'src/app/services/event.service';




@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  

@Input() events:MorganizeEvent[];
currentUser:Account;
 



  constructor(private search:SearchService, private transfer:DataServiceService, private eventService:EventService) {
    

   }


  ngOnInit() 
  {
    // this.transfer.currentFetch.subscribe(current => this.currentUser = current);

    // this.transfer.currentFetch2.subscribe(result => this.events = result.map((event) => MorganizeEvent.createEvent(event)));

  }
}
