import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }

  username:string = "";
  password:string = "";
  lc:LoginCredentials = new LoginCredentials(0, "", this.username, this.password, "", []);

  onSubmitLogin(username:string, password:string)
  {
    this.lc.username = username;
    this.lc.password = password;
    this.login.sendLoginInformation(this.lc);
   
  }

  ngOnInit() {
    
  }

}
