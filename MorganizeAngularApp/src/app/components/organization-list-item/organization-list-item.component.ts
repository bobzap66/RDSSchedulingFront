import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-organization-list-item',
  templateUrl: './organization-list-item.component.html',
  styleUrls: ['./organization-list-item.component.css']
})
export class OrganizationListItemComponent implements OnInit {

  @Input() organization:Organization;

  constructor() { }

  handleClick(){
    console.log(this.organization.name + " clicked");
  }

  ngOnInit() {
  }

}
