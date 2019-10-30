import { Component, OnInit } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
events:MorganizeEvent[];


  constructor(private transferSearch:DataServiceService) { }


  ngOnInit() {
    this.transferSearch.currentFetch2.subscribe(response => this.events = response);
  }

}
