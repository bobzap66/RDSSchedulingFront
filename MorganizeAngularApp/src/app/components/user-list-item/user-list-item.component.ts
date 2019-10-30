import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/loginPost';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user:Account;

  constructor() { }

  ngOnInit() {
  }

}
