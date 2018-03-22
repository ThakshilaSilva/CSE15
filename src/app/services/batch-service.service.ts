import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class BatchServiceService {

  private http: Http;

  constructor(private router:Router, @Inject(Http) http) {
    this.http = http;
  }

  addEvent(data){
    return this.http.post("http://localhost:3000/add_event", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => res.json()); 
  }

}
