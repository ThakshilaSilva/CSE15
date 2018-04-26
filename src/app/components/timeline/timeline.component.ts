import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchServiceService } from '../../services/batch-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css','./skel.css','./style.css','./style-xlarge.css','./font-awesome.min.css']
})
export class TimelineComponent implements OnInit {

  events: any[];
  batchService: BatchServiceService

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

}

