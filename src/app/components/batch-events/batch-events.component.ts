import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchServiceService } from '../../services/batch-service.service';

@Component({
  selector: 'app-batch-events',
  templateUrl: './batch-events.component.html',
  styleUrls: ['./batch-events.component.css']
})
export class BatchEventsComponent implements OnInit {

  batchService: BatchServiceService;

  constructor(private router: Router, private batch: BatchServiceService) {
    this.batchService = batch;
   }

  ngOnInit() {
  }

  addEvent(){
    const eventName = document.forms['userForm']['eventName'].value;
    const date = document.forms['userForm']['date'].value;
    const description =document.forms['userForm']['description'].value;
    const album = document.forms['userForm']['album'].value;

    this.batch.addEvent({
      eventName: eventName,
      date: date,
      description: description,
      album: album
    }).subscribe(result => {
      console.log("Result"+result);
      alert('Successfully event added!');
    }, error => {
      console.log(error);
    }
    );

  }

}
