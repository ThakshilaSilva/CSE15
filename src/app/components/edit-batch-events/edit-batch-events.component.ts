import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../../services/batch-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-batch-events',
  templateUrl: './edit-batch-events.component.html',
  styleUrls: ['./edit-batch-events.component.css']
})
export class EditBatchEventsComponent implements OnInit {

  batchService : BatchServiceService;
  events: any[];
  edit: boolean = false;
  id: any;
  enable: boolean =true;
  eventName: any;
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
    
    this.batch.getEvents().subscribe(
     events => {
         this.events = events;
      },
      error => {
        console.log(error);
      }
    );
  
} 

editThis(EventID, EventName){
  if(this.enable){
    console.log("Edited " + EventID);
    this.edit= true;
    this.id = EventID;
    this.eventName = EventName;
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
  this.batch.getSelectedBatchEvent({
    EventID: this.id
  }).subscribe(
    result => {
      
      this.items = result[0];
      //this.date = moment(result[0].DueDate).format("YYYY-MM-DDTkk:mm");
      
      console.log(result[0].DueDate);
    },
    error => {
      console.log("dfgvhb")
      console.log(error);
      
});
}

update(){

  const name= document.forms['userForm']['name'].value;
  const description= document.forms['userForm']['description'].value;
  const album1= document.forms['userForm']['album1'].value;
  const album2= document.forms['userForm']['album2'].value;
  const album3= document.forms['userForm']['album3'].value;
  //const date= document.forms['userForm']['date'].value;

  this.batchService.updateBatchEvent({
    name: name,
    description: description,
    album1: album1,
    album2: album2,
    album3: album3,
    ID: this.id
  }).subscribe(
    result => {
      alert("Successfully updated the event");
    }, error =>{
      console.log(error);
    }
  );
   this.enable=true;
    
}

}
