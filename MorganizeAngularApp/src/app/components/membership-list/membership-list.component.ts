import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Membership } from 'src/app/models/membership';
import { Account } from 'src/app/models/loginPost'
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css']
})
export class MembershipListComponent implements OnInit {
  currentUser:Account;
  memberships:Membership[];

  constructor(private organizationService:OrganizationService, private transfer:DataServiceService) { }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);

    this.organizationService.getMemberships(this.currentUser.id).then((response) => {
      this.memberships = response;
    });
  }

}
