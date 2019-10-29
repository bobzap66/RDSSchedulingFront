import { Component, OnInit, Output, ViewChild, ɵConsole } from '@angular/core';
import { LoginCredentials } from 'src/app/models/loginPost';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit 
{
  currentUser:LoginCredentials; 

  constructor(private transfer:DataServiceService)
   {
      
     
   } 

  

   

  ngOnInit() 
  {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
    console.log(this.currentUser);
  }

}

