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
    const photo1 = document.forms['userForm']['image1'].value;
    const photo2 = document.forms['userForm']['image2'].value;
    const photo3 = document.forms['userForm']['image3'].value;
    const album1 = document.forms['userForm']['album1'].value;
    const album2 = document.forms['userForm']['album2'].value;
    const album3 = document.forms['userForm']['album3'].value;


    this.batch.addEvent({
      eventName: eventName,
      date: date,
      description: description,
      photo1: photo1,
      photo2: photo2,
      photo3: photo3,
      album1: album1,
      album2: album2,
      album3: album3
    }).subscribe(result => {
      console.log("Result"+result);
      alert('Successfully event added!');
    }, error => {
      console.log(error);
    }
    );

  }

}
