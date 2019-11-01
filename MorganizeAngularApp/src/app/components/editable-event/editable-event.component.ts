import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Tag } from 'src/app/models/tag'
import { EventService } from 'src/app/services/event.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-editable-event',
  templateUrl: './editable-event.component.html',
  styleUrls: ['./editable-event.component.css']
})
export class EditableEventComponent implements OnInit {
  @Input() event:MorganizeEvent;
  @Input() create:boolean;
  tagString:string;
  u_id:number;
  callback:(id:number, ev:MorganizeEvent)=>Promise<MorganizeEvent>;
  

createEvent() {
  
  this.createTagObjectsFromString()
  this.event.startdate = this.toJSDate(this.event.startdate).getTime();
  this.event.enddate = this.toJSDate(this.event.enddate).getTime();
  this.route.paramMap.subscribe(
    (paramMap:ParamMap) => { 
      this.callback(parseInt(paramMap.get('id')), this.event)
      .then((response) => {
        
        this.event = MorganizeEvent.createEvent(response);
        this.router.navigate([`/events/${this.event.id}`])
      });
    
    }
  );
}

toJSDate (dT) {

  let dateTime = dT.split("T");//dateTime[0] = date, dateTime[1] = time
  
  let date = dateTime[0].split("-");
  let time = dateTime[1].split(":");

  
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

    };
  }

  constructor(private es:EventService, private route: ActivatedRoute, private router:Router, private http:HttpClient ) {



  }

  ngOnInit() {
      if(this.router.url.match(/\/users\/\d+\/events/i)){

      if(this.create){
        this.callback = this.es.createUserEvent;
        
      }else{
        this.callback = this.es.updateAdministeredEvent;
      }
    }else if(this.router.url.match(/\/organizations\/\d+\/events/i)){
      this.callback = this.es.createOrganizationEvent;
    }else{
      console.log("invalid route");
    }
  }

}

