import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Organization } from 'src/app/models/organization';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  events:MorganizeEvent[];
  orgs:Organization[];


  constructor(private transferSearch:DataServiceService) { }

  ngOnInit() 
  {
    this.transferSearch.currentFetch2.subscribe(response => this.events = response);
    this.transferSearch.getOrganizationResults.subscribe(orgResponse => this.orgs = orgResponse);
    console.log(this.orgs);
    console.log(this.events);
  }

}
