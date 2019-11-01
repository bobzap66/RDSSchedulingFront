import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { Tag } from 'src/app/models/tag';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost'
import { OrganizationService } from 'src/app/services/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editable-organization',
  templateUrl: './editable-organization.component.html',
  styleUrls: ['./editable-organization.component.css']
})
export class EditableOrganizationComponent implements OnInit {

  @Input() organization:Organization;
  tagString:string;
  currentUser:Account;

 constructor(private transfer:DataServiceService, private router:Router, private organizationService:OrganizationService) { }

  createOrganization() {
    this.createTagObjectsFromString()
    this.organizationService.createOrganization(this.currentUser.id, this.organization).then((response) =>{
      this.router.navigate([`/users/${this.currentUser.id}`]);
    });
  }

  createTagObjectsFromString() {
    let tagNames:string[] = this.tagString.split(",");
    for(let i = 0; i < tagNames.length; i++)
     {
      let temp:Tag = new Tag();
      temp.tag = tagNames[i];
      console.log(temp);
      this.organization.tags.push(temp);
    }
   
  }

 

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
  }

}
