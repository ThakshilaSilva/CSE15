import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../../services/batch-service.service';
import { Router } from '@angular/router';
//var moment = require('moment');

@Component({
  selector: 'app-edit-aca-events',
  templateUrl: './edit-aca-events.component.html',
  styleUrls: ['./edit-aca-events.component.css']
})
export class EditAcaEventsComponent implements OnInit {

  batchService : BatchServiceService;
  events: any[];
  edit: boolean = false;
  id: any;
  enable: boolean =true;
  moduleName: any;
  enableEdit: boolean = false;
  items ={};
  date: Date;
  
  constructor(private router: Router, private batch: BatchServiceService) {
    this.batchService = batch;
  }

  ngOnInit() {
    this.getEvents();

  }

  getEvents(){
    
      this.batch.getAcaEvents().subscribe(
       events => {
           this.events = events;
        },
        error => {
          console.log(error);
        }
      );
    
  }

  editThis(EventID, ModuleName){
    if(this.enable){
      console.log("Edited " + EventID);
      this.edit= true;
      this.id = EventID;
      this.moduleName = ModuleName;
      this.enable =false;
     // this.edit =false;
     this.getEditableDetails(this.id);

      return true;
    }
    else{
      alert("Wait... An event is still updating!")
    }
      
  }
  
  getEditableDetails(id){
    this.batch.getSelectedAcaEvent({
      EventID: this.id
    }).subscribe(
      result => {
        
        this.items = result[0];
        //this.date = moment(result[0].DueDate).format("YYYY-MM-DDTkk:mm");
        
        console.log(result[0].DueDate);
      },
      error => {
        console.log(error);
        
  });
}

update(){

  const code= document.forms['userForm']['code'].value;
  const name= document.forms['userForm']['name'].value;
  const detail= document.forms['userForm']['detail'].value;
  //const date= document.forms['userForm']['date'].value;

  this.batchService.updateAcaEvent({
    code: code,
    name: name,
    detail: detail,
    //date: date,
    ID: this.id
  }).subscribe(
    result => {
      //console.log("hello");
      //console.log("Result :"+result[0]);
      alert("Successfully updated the event");
    }, error =>{
      console.log("hi");
      console.log(error);
    }
  );
   this.enable=true;
    
}
}
