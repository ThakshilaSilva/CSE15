import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private isUserLogged;
  private username;
  private http: Http;


  constructor(private router: Router, @Inject(Http) http) {
    this.isUserLogged = false;
    this.http = http;
  }

  setUserLoggedIn(){
    this.isUserLogged = true;
  }

  getUserLoggedIn(){
    return this.isUserLogged;
  }

  setUsername(username: string){
    this.username = username;
  }

  getUsername(){
    return this.username;
  }

  queryUser(data) {         // get user details
    return this.http.post('http://localhost:3000/get_user', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  addUser(data){ // add new users
    return this.http.post("http://localhost:3000/add_new_user", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => {
      console.log(res);
      return res.json();
    }); 

  }
 
  updateUser(data){ //edit user
    return this.http.post("http://localhost:3000/updateUser", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => res.json()); 

  }

  getMembers(){ //get members
    return this.http.get("http://localhost:3000/getMembers").map(res => res.json());
  }

  queryAchievements(data){
    return this.http.post('http://localhost:3000/getAchievements', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  addAchievement(data){
    return this.http.post('http://localhost:3000/addAchievement', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

 

  
 
}
