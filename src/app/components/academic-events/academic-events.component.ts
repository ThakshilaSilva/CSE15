import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../../services/batch-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic-events',
  templateUrl: './academic-events.component.html',
  styleUrls: ['./academic-events.component.css']
})
export class AcademicEventsComponent implements OnInit {

  batchService : BatchServiceService;

  constructor(private router: Router, private batch: BatchServiceService) {
    this.batchService = batch;
   }

  ngOnInit() {
  }

  addEvent(){

    const module = document.forms['userForm']['code'].value;
    const name = document.forms['userForm']['name'].value;
    const description = document.forms['userForm']['description'].value;
    const date = document.forms['userForm']['date'].value;

    this.batch.addAcaEvent({
      module: module,
      name: name,
      description: description,
      date: date
    }).subscribe(
      result => {
        alert("Successfully added the event");
      }, error =>{
        console.log(error);
      }
    )
  }

}
