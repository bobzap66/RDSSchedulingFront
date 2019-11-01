import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list-item',
  templateUrl: './organization-list-item.component.html',
  styleUrls: ['./organization-list-item.component.css']
})
export class OrganizationListItemComponent implements OnInit {

  @Input() organization:Organization;

  constructor(private router:Router) { }


  handleClick()
  {
    this.router.navigate([`organizations/${this.organization.id}`])
  }

  ngOnInit() {
   
  }

}
