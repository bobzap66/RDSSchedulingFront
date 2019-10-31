import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { SearchService } from 'src/app/services/search.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  @Input() organizations:Organization[];
  
  constructor(private transferSearch:DataServiceService) { }

  ngOnInit() {
    //this.transferSearch.getOrganizationResults.subscribe(orgResponse => this.organizations = orgResponse);
  }

}
