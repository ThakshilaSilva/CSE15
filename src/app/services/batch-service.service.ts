import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class BatchServiceService {

  user: any;
  filesToUpload: Array<File> =[];

  private http: Http;

  constructor(private router:Router, @Inject(Http) http) {
    this.http = http;
  }

  addEvent(data){
    return this.http.post("http://localhost:3000/add_event", JSON.stringify(data),
    new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
    .map(res => res.json()); 
  }

  getEvents(){
    return this.http.get("http://localhost:3000/get_events").map(res => res.json());
  }


  uploadAvatar(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
     let file: File = fileList[0];
    
     let formData:FormData = new FormData();
     formData.append('img1',"exo" );
     formData.append('img', file);
     console.log(formData);
     let headers = new Headers({'Content-Type': 'application/json'});
     /** No need to include Content-Type in Angular 4 */
     // headers.append('Content-Type', 'multipart/form-data');
     // headers.append('Accept', 'application/json');
      console.log(file);
      this.http.post('http://localhost:3000/upload_avatar',{img:file.name}, 
      {headers: headers})
         .map(res => res.json())
         .subscribe(
             data => console.log('success'),
             error => console.log(error)
         )
   }

  }
}

