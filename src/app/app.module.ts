import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng4FilesModule } from 'angular4-files-upload';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { PublicComponent } from './components/public/public.component';
import { BatchEventsComponent } from './components/batch-events/batch-events.component';
import { Component } from '@angular/core/src/metadata/directives';
import { BatchServiceService } from './services/batch-service.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AcheivementsComponent } from './components/acheivements/acheivements.component';
import { IndexComponent } from './components/index/index.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PeopleComponent } from './components/people/people.component';
import { EditEventsComponent } from './components/edit-events/edit-events.component';
import { AcademicEventsComponent } from './components/academic-events/academic-events.component';
import { EditAcaEventsComponent } from './components/edit-aca-events/edit-aca-events.component';
import { EditBatchEventsComponent } from './components/edit-batch-events/edit-batch-events.component';
import { EditAchievementsComponent } from './components/edit-achievements/edit-achievements.component';


const appRoutes:Routes = [
  {
    path:'',
    component: PublicComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'upload',
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addBatchEvents',
    component: BatchEventsComponent
  },
  {
    path: 'editProfile',
    component: ProfileComponent
  },
  {
    path: 'achievement',
    component: AcheivementsComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'editEvents',
    component: EditEventsComponent
  },
  {
    path: 'addAcdemicEvents',
    component: AcademicEventsComponent
  },
  {
    path: 'editAcaEvents',
    component: EditAcaEventsComponent
  },
  {
    path: 'editBatchEvents',
    component: EditBatchEventsComponent
  },
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SignupComponent,
    PublicComponent,
    BatchEventsComponent,
    ProfileComponent,
    AcheivementsComponent,
    IndexComponent,
    TimelineComponent,
    PeopleComponent,
    EditEventsComponent,
    AcademicEventsComponent,
    EditAcaEventsComponent,
    EditBatchEventsComponent,
    EditAchievementsComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [UserService, BatchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
