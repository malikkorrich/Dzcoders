import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import {DashboardGuard} from './core/guards/dashboard.guard'
import { NavGuard } from './core/guards/nav.guard';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { TeamComponent } from './modules/team/team.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProjectComponent } from './modules/project/project.component';
import { SettingComponent } from './modules/setting/setting.component';
import { ProjectlistComponent } from './modules/projectlist/projectlist.component';



const routes:Routes = [
 {path:'',component:HomeComponent},
 {path:'signup',component:SignupComponent,canActivate:[NavGuard]},
 {path:'login',component:LoginComponent,canActivate:[NavGuard]},

 {path:'dashboard',component:DashboardComponent,children:[
  {path:'',component:ProjectlistComponent},
  {path:'projects',component:ProjectComponent},
  {path:'settings',component:SettingComponent}
 ] ,canActivate:[DashboardGuard]},


 {path:'contact',component:ContactComponent},
 {path:'about',component:AboutComponent},
 {path:'team',component:TeamComponent},
 {path:'**', redirectTo:'/' ,pathMatch:'full'}
]

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
