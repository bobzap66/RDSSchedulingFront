import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }

  username:string = "";
  password:string = "";
  lc:LoginCredentials = new LoginCredentials(0, "", "", "", "", []);
  currentUser:LoginCredentials;
  finishedToken:boolean = false;

  onSubmitLogin(username:string, password:string)
  {
    this.lc.username = username;
    this.lc.password = password;
    this.login.sendLoginInformation(this.lc, this.finishedToken);
    
  };


  ngOnInit() 
  {

  }

}


//.then((info)=>{this.currentUser = info}).catch((response)=>{console.log("Error with login")});