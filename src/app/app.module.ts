import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {HttpClientModule} from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { AddpeopleComponent } from './addpeople/addpeople.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { McaComponent } from './mca/mca.component';
import { MscComponent } from './msc/msc.component';
import { McomComponent } from './mcom/mcom.component';
import { MbaComponent } from './mba/mba.component';
import { McastudentsComponent } from './mcastudents/mcastudents.component';
import { McomstudentsComponent } from './mcomstudents/mcomstudents.component';
import { MscstudentsComponent } from './mscstudents/mscstudents.component';
import { MbastudentsComponent } from './mbastudents/mbastudents.component';
import { PrinicipalComponent } from './prinicipal/prinicipal.component';
import { CollegeComponent } from './college/college.component';
import { McomrComponent } from './mcomr/mcomr.component';
import { FmComponent } from './fm/fm.component';
import { McomfmComponent } from './mcomfm/mcomfm.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdmindashboardComponent,
    FacultydashboardComponent,
    AdminmanagementComponent,
    AddpeopleComponent,
    AddstudentComponent,
    AddfacultyComponent,
    McaComponent,
    MscComponent,
    McomComponent,
    MbaComponent,
    McastudentsComponent,
    McomstudentsComponent,
    MscstudentsComponent,
    MbastudentsComponent,
    PrinicipalComponent,
    CollegeComponent,
    McomrComponent,
    FmComponent,
    McomfmComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
