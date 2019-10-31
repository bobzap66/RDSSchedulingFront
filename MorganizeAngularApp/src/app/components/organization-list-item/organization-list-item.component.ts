import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list-item',
  templateUrl: './organization-list-item.component.html',
  styleUrls: ['./organization-list-item.component.css']
})
export class OrganizationListItemComponent implements OnInit {

  @Input() organization:Organization;

  constructor(private router:Router) { }

  handleClick(org:Organization)
  {
    console.log(org.name + " clicked");
    //router.navigate([`organizations/${this.organization.o_id}`])
  }

  ngOnInit() {
   
  }

}
