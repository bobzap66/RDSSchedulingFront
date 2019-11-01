import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-create-organization-page',
  templateUrl: './create-organization-page.component.html',
  styleUrls: ['./create-organization-page.component.css']
})
export class CreateOrganizationPageComponent implements OnInit {

  @Input() organization:Organization;

  constructor() 
  { 
    this.organization = new Organization();
  }

  ngOnInit() {
  }

}
