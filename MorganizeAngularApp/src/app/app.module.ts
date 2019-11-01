import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';
import { ResultsComponent } from './components/results/results.component';
import { DatetimePipe } from './pipes/datetime.pipe';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { OrganizationListItemComponent } from './components/organization-list-item/organization-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { EditableEventComponent } from './components/editable-event/editable-event.component';
import { EditableOrganizationComponent } from './components/editable-organization/editable-organization.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { MembershipListComponent } from './components/membership-list/membership-list.component';
import { UpdateEventPageComponent } from './components/update-event-page/update-event-page.component';
import { CreateEventPageComponent } from './components/create-event-page/create-event-page.component';
import { UpdateOrganizationPageComponent } from './components/update-organization-page/update-organization-page.component';
import { CreateOrganizationPageComponent } from './components/create-organization-page/create-organization-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    CreateUserPageComponent,
    ResultsComponent,
    DatetimePipe,
    EventListComponent,
    EventListItemComponent,
    EventPageComponent,
    OrganizationPageComponent,
    OrganizationListComponent,
    OrganizationListItemComponent,
    UserListComponent,
    UserListItemComponent,
    EditableEventComponent,
    EditableOrganizationComponent,
    AppointmentListComponent,
    MembershipListComponent,
    UpdateEventPageComponent,
    CreateEventPageComponent,
    UpdateOrganizationPageComponent,
    CreateOrganizationPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
