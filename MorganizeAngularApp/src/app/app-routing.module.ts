import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';
import { ResultsComponent } from './components/results/results.component';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { EditableEventComponent } from './components/editable-event/editable-event.component';
import { EditableOrganizationComponent } from './components/editable-organization/editable-organization.component';
import { CreateEventPageComponent } from './components/create-event-page/create-event-page.component';
import { UpdateEventPageComponent } from './components/update-event-page/update-event-page.component';
import { CreateOrganizationPageComponent } from './components/create-organization-page/create-organization-page.component';
import { UpdateOrganizationPageComponent } from './components/update-organization-page/update-organization-page.component';


const routes: Routes = [
  {path: "login", component:LoginComponent}, 
  {path: "userPage", component:UserPageComponent},
  {path: "createUser", component:CreateUserPageComponent},
  {path: "results/:type", component:ResultsComponent},
  {path: "users/:u_id/events/createEvent", component:CreateEventPageComponent},
  {path: "users/:u_id/events/:e_id", component:UpdateEventPageComponent},
  {path: "users/:u_id/organizations/createOrganiation", component:CreateOrganizationPageComponent},
  {path: "users/:u_id/organizations/:o_id", component:UpdateOrganizationPageComponent},
  {path: "users/:u_id", component:UserPageComponent},
  {path: "events/:e_id", component:EventPageComponent},
  {path: "organizations/:o_id", component:OrganizationPageComponent},  
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
