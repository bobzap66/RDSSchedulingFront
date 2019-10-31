import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  @Input() event:MorganizeEvent;

  constructor() { }

  handleClick(){
    console.log(this.event.name + " clicked");
    //router.navigate([`organizations/${this.organization.o_id}`])
  }

  ngOnInit() {
  }

}
