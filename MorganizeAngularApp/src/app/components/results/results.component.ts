import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { promise } from 'protractor';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  events:MorganizeEvent[];

  constructor(private transferSearch:DataServiceService) { }

  ngOnInit() 
  {
    this.transferSearch.currentFetch2.subscribe(response => this.events = response);
    console.log(this.events);
  }

}
