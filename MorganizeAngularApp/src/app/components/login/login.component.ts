import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/loginPost';
import { LoginService } from 'src/app/services/login.service';
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
  lc:Account = new Account(0, "", "", "", "", []);
  currentUser:Account;

  onSubmitLogin()
  {
    this.login.sendLoginInformation(this.lc).then((response) => 
    {
      
       this.currentUser = response;
       if(this.currentUser !== null)
       {
        this.transfer.changeMessage(this.currentUser);//sets transfer to other components 
        this.router.navigate([`/users/${this.currentUser.id}`]);
       }
       else
       {
         alert("Invalid Username or Password");//please change, but for now i like it
         this.lc.password = "";
       }
     
    });//api call to retrive login information
    
    
   ;//navigation to other page,,,,need to add this.currentUser.id to the route
  };

  loginOnEnterKey(event:KeyboardEvent){
    if(event.which === 13){
      this.onSubmitLogin();
    }
  }

  createUserPage()
  {
    this.router.navigate(['/createUser']);
  }


  ngOnInit() 
  {

  }

}


//.then((info)=>{this.currentUser = info}).catch((response)=>{console.log("Error with login")});