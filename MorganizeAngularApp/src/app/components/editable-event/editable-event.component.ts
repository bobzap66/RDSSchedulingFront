import { Component, OnInit } from '@angular/core';
import { MorganizeEvent } from 'src/app/models/morganizeEvent';
import { Tag } from 'src/app/models/tag'

@Component({
  selector: 'app-editable-event',
  templateUrl: './editable-event.component.html',
  styleUrls: ['./editable-event.component.css']
})
export class EditableEventComponent implements OnInit {
  @Input() event:MorganizeEvent;
  tagString:string;

createEvent() {
  this.createTagObjectsFromString()
  console.log(this.event);
}
createTagObjectsFromString() {
    let tagNames:string[] = this.tagString.split(",");
    for(let i = 0; i < tagNames.length; i++) {
      let temp:Tag;
      temp.id = 0;
      temp.tag = tagNames[i];
      this.event.tags.push(temp);
    };
  }

  constructor(event:MorganizeEvent, default=null) { }

  ngOnInit() {
  }

}

