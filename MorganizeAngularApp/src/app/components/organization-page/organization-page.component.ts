import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  organization:Organization;

  constructor(private route:ActivatedRoute, private router:Router, private orgService:OrganizationService) {

    this.route.paramMap.subscribe(
      (paramMap:ParamMap) => { 
        console.log(paramMap.get("o_id"));
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
