import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';
import { ResultsComponent } from './components/results/results.component';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';


const routes: Routes = [
  {path: "login", component:LoginComponent}, 
  {path: "userPage", component:UserPageComponent},
  {path: "createUser", component:CreateUserPageComponent},
  {path: "results", component:ResultsComponent},
  {path: "organizations/:id", component:OrganizationPageComponent},  
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
