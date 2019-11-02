import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Tag } from 'src/app/models/tag'
import { EventService } from 'src/app/services/event.service'
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router'
import { DataServiceService } from 'src/app/services/data-service.service';
import { Account } from 'src/app/models/loginPost'



@Component({
  selector: 'app-editable-event',
  templateUrl: './editable-event.component.html',
  styleUrls: ['./editable-event.component.css']
})
export class EditableEventComponent implements OnInit {
  @Input() event:MorganizeEvent;
  @Input() create:boolean;
  currentUser:Account;
  tagString:string;
  u_id:number;
  organizationId:number;
  callback:(id:number, ev:MorganizeEvent)=>Promise<MorganizeEvent>;


  //1= create user event
  //2= update event
  //3= createOrganization event
  action:number;

createEvent() {
  
  this.createTagObjectsFromString()
  this.event.startdate = this.toJSDate(this.event.startdate).getTime();
  this.event.enddate = this.toJSDate(this.event.enddate).getTime();
  this.route.paramMap.subscribe(
    (paramMap:ParamMap) => 
    { 
      //console.log(paramMap.get("id"));
      if(this.action === 1)//create user event
      {
      this.es.createUserEvent(this.currentUser.id, this.event).then((response) =>{
        this.router.navigate([`/events/${response.id}`]);
      });
      }
      if(this.action === 2)//upadte event
      {
        this.es.updateAdministeredEvent(this.currentUser.id, this.event).then((response) =>{
          this.router.navigate([`/events/${response.id}`]);
        });
      }
      if(this.action === 3)//createOrganizationEvent
      {
        this.es.createOrganizationEvent(this.organizationId, this.event).then((response) =>{
          this.router.navigate([`/organization/${response.organization.id}`]);
        });
      }


      /*this.callback(parseInt(paramMap.get('id')), this.event)
      .then((response) => {
        
        this.event = MorganizeEvent.createEvent(response);
        this.router.navigate([`/events/${this.event.id}`])
      });*/
    
    }
  );
}

toJSDate (dT) {

  let dateTime = dT.split("T");//dateTime[0] = date, dateTime[1] = time
  
  let date = dateTime[0].split("-");
  let time = dateTime[1].split(":");
  //console.log(date);
  //console.log(time);
  
  //(year, month (0-11), day, hours, minutes, seconds, milliseconds)
  return new Date(date[0], date[1]-1, date[2], time[0], time[1], 0, 0);
}


createTagObjectsFromString() {
    if(this.tagString == undefined) {
      return;
    }
    let tagNames:string[] = this.tagString.split(",");
    for(let i = 0; i < tagNames.length; i++) {
      this.event.tags = [];
      let temp:Tag = new Tag();
      temp.tag = tagNames[i].trim();
      this.event.tags.push(temp);
      //console.log(this.event.tags);
    };
  }
  constructor(private es:EventService, private route: ActivatedRoute, private router:Router, private transfer:DataServiceService) 
  {
  


    
 
    


  }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(current => this.currentUser = current);
    if(this.router.url.match(/\/users\/\d+\/events/i)){
      if(this.create)
      {
        this.action = 1;
      }
      else
      {
        this.action = 2;
      }
    }
    else if(this.router.url.match(/\/organizations\/\d+\/events/i))
    {
      this.action = 3;
      (paramMap:ParamMap) => 
      { 
        this.organizationId = parseInt(paramMap.get("id"));
      }
    }
    else
    {
      console.log("invalid route");
    }
  }

}


/*
//delete
{path: "users/:id/events/createEvent", component:CreateEventPageComponent},
{path: "users/:id/events/:e_id", component:UpdateEventPageComponent},
{path: "organizations/:id/events/createEvent", component:CreateEventPageComponent},*/