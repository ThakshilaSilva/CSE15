import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

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
    path: 'dashboard',
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
    path: 'addAchievement',
    component: AcheivementsComponent
  }
  
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
    AcheivementsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, BatchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
