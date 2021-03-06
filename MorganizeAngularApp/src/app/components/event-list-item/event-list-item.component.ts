import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';

import { Router } from '@angular/router';

import { Appointment } from 'src/app/models/appointment';


@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  @Input() event:MorganizeEvent;

  constructor(private router:Router) {
    
  }

  handleClick(){
    this.router.navigate([`events/${this.event.id}`])
  }



  ngOnInit() {
  }

}
