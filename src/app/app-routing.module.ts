import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { AddpeopleComponent } from './addpeople/addpeople.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { McaComponent } from './mca/mca.component';
import { MbaComponent } from './mba/mba.component';
import { McomComponent } from './mcom/mcom.component';
import { MscComponent } from './msc/msc.component';
import { McastudentsComponent } from './mcastudents/mcastudents.component';
import { McomstudentsComponent } from './mcomstudents/mcomstudents.component';
import { MscstudentsComponent } from './mscstudents/mscstudents.component';
import { MbastudentsComponent } from './mbastudents/mbastudents.component';
import { PrinicipalComponent } from './prinicipal/prinicipal.component';
import { CollegeComponent } from './college/college.component';
import { McomrComponent } from './mcomr/mcomr.component';
import { McomfmComponent } from './mcomfm/mcomfm.component';
const routes:Routes=[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
  path:'admindashboard',
  component:AdminmanagementComponent
  },
  {
    path:'addstudent',
    component:AddstudentComponent
  },
  {
    path:'addfaculty',
    component:AddfacultyComponent

  },
  {
    path:'addpeople',
    component:AddpeopleComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdmindashboardComponent
  },
  {
    path:'faculty',
    component:FacultydashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'prinicipal',
    component:PrinicipalComponent
  },{
    path:'college',
    component:CollegeComponent
  },
  {
    path:'mca',
    component:McaComponent
  },
  {
    path:'mba',
    component:MbaComponent
  },
  {
    path:'mcom',
    component:McomComponent
  },
  {
    path:'msc',
    component:MscComponent
  },
  {
    path:'mcastudents',
    component:McastudentsComponent
  },
  {
    path:'mcomstudents',
    component:McomstudentsComponent
  },{
    path:'mcomr',
    component:McomrComponent
  },
  {
    path:'mcomfm',
    component:McomfmComponent
  },
  {
    path:'mscstudents',
    component:MscstudentsComponent
  },
  {
    path:'mbastudents',
    component:MbastudentsComponent
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
