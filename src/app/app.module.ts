import { ScrollDirective } from './shared/directive/scroll.directive';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { TeamComponent } from './modules/team/team.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ProjectComponent } from './modules/project/project.component';
import { SettingComponent } from './modules/setting/setting.component';
import { ProjectlistComponent } from './modules/projectlist/projectlist.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ContactComponent,
    AboutComponent,
    TeamComponent,
    HeaderComponent,
    FooterComponent,
    ScrollDirective,
    ProjectComponent,
    SettingComponent,
    ProjectlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
