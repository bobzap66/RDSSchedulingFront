import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { CreateUserService } from 'src/app/services/create-user.service'
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {
  name:string;
  email:string;
  username:string;
  password:string;
  user:LoginCredentials = new LoginCredentials(0, "", "", "", "", []);

  constructor(private create:CreateUserService, private transfer:DataServiceService, private router:Router) { }

  createUser(name:string, email:string, username:string, password:string)
  {
    this.user.name = name;
    this.user.email = email;
    this.user.username = username;
    this.user.password = password;

    this.user = this.create.sendCreateUser(this.user);
    while(this.user === undefined){};
    this.transfer.changeMessage(this.user);//sets transfer to other components
    this.router.navigate(['/userPage']);//navigation to other page
  }

  ngOnInit() 
  {
   
  }

}
