import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  @Input() organizations:Array<Organization>;
  
  constructor() { }

  ngOnInit() {
  }

}
