import { Component, OnInit, Input } from '@angular/core';
import { Membership } from 'src/app/models/membership';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  @Input() members:Membership[];

  constructor() { }

  ngOnInit() {
  }

}
