import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { OrganizationService } from 'src/app/services/organization.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-organization-page',
  templateUrl: './update-organization-page.component.html',
  styleUrls: ['./update-organization-page.component.css']
})
export class UpdateOrganizationPageComponent implements OnInit {

  organization:Organization;
  create:boolean;

  constructor(private orgService:OrganizationService, private route:ActivatedRoute, private router:Router) { 
    this.create = false;
    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        //console.log(paramMap.get("u_id"));
        this.orgService.getOrganization(parseInt(paramMap.get('o_id')))
        .then((response) => {
          this.organization = Organization.createOrganization(response);
        });
      
      }
    );
  }

  ngOnInit() {
  }

}
