import { Component, OnInit, Input } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Tag } from 'src/app/models/tag'
import { EventService } from 'src/app/services/event.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router'


@Component({
  selector: 'app-editable-event',
  templateUrl: './editable-event.component.html',
  styleUrls: ['./editable-event.component.css']
})
export class EditableEventComponent implements OnInit {
  @Input() event:MorganizeEvent;
  tagString:string;
  u_id:number;

createEvent() {
  
  this.createTagObjectsFromString()
  this.event.startdate = this.toJSDate(this.event.startdate).getTime();
  this.event.enddate = this.toJSDate(this.event.enddate).getTime();
  this.route.paramMap.subscribe(
    (paramMap:ParamMap) => { 
      console.log(paramMap.get("u_id"));
      this.es.createUserEvent(parseInt(paramMap.get('u_id')), this.event)
      .then((response) => {
        
        this.event = MorganizeEvent.createEvent(response);
        console.log(this.event);
      });
    
    }
  );
  //this.es.createUserEvent(u_id, this.event);
}

toJSDate (dT) {

  let dateTime = dT.split("T");//dateTime[0] = date, dateTime[1] = time
  
  let date = dateTime[0].split("-");
  let time = dateTime[1].split(":");
  console.log(date);
  console.log(time);
  
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
      console.log(this.event.tags);
    };
  }

  constructor(private es:EventService, private route: ActivatedRoute ) {

   }

  ngOnInit() {
 
  }

}

