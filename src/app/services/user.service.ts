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

  addUser(data){
    return this.http.post("http://localhost:3000/add_new_user", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => res.json()); 

  }

  updateUser(data){
    return this.http.post("http://localhost:3000/updateUser", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => res.json()); 

  }

}
