import { Component, OnInit, Input } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private login:LoginService, private router:Router, private transfer:DataServiceService) { }

  username:string = "";
  password:string = "";
  lc:LoginCredentials = new LoginCredentials(0, "", "", "", "", []);
  currentUser:LoginCredentials;
  finishedToken:boolean = false;

  onSubmitLogin(username:string, password:string)
  {
    this.lc.username = username;
    this.lc.password = password;
    this.currentUser = this.login.sendLoginInformation(this.lc, this.finishedToken);//api call to retrive login information
    
    while(this.currentUser === undefined){};//waits for the observable to finish
    
    this.transfer.changeMessage(this.currentUser);//sets transfer to other components 
    this.router.navigate(['/userPage']);//navigation to other page
  };


  ngOnInit() 
  {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);//used to get currentUser login credentials(Object of current user)

  }

}


//.then((info)=>{this.currentUser = info}).catch((response)=>{console.log("Error with login")});