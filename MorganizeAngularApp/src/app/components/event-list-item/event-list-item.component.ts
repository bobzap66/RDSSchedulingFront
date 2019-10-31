import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  @Input() event:MorganizeEvent;

  constructor(private router:Router) {  }

  handleClick(){
    console.log(this.event.e_id + " clicked");
    //router.navigate([`organizations/${this.organization.o_id}`])
  }

  ngOnInit() {
  }

}
