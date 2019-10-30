import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/loginPost';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users:Array<Account>;

  constructor() { }

  ngOnInit() {
  }

}
