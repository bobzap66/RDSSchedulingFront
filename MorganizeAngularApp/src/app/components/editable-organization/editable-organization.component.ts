import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-editable-organization',
  templateUrl: './editable-organization.component.html',
  styleUrls: ['./editable-organization.component.css']
})
export class EditableOrganizationComponent implements OnInit {

  @Input() organization:Organization;

  constructor() { }

  ngOnInit() {
  }

}
