import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Appointment } from 'src/app/models/appointment';
import { Account } from 'src/app/models/loginPost'
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  currentUser:Account;
  appointments:Appointment[];

  constructor(private router:Router, private eventService:EventService, private transfer:DataServiceService) { }

  ngOnInit() {
    this.transfer.currentFetch.subscribe(response => this.currentUser = response);
    this.eventService.getUserAppointments(this.currentUser.id).then((response) =>{
      this.appointments = response;
    });
  }

  editEvent(appointment:Appointment){
    this.router.navigate([`/users/${this.currentUser.id}/events/${appointment.event.id}`]);
  }

}
