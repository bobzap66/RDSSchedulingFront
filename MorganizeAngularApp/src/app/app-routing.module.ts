import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';


const routes: Routes = [
  {path: "login", component:LoginComponent}, 
  {path: "userPage", component:UserPageComponent},
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
