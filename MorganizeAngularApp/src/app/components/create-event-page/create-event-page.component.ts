import { Component, OnInit } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {

  event:MorganizeEvent;

  constructor() {
    this.event = new MorganizeEvent();
   }

  ngOnInit() {
  }

}
