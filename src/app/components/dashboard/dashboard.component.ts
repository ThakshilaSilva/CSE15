import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../../services/batch-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  batchService: BatchServiceService;

  constructor(private router:Router, private batch:BatchServiceService) {
    this.batchService = batch;
   }

  ngOnInit() {
    
  }

  
  fileChangeEvent(event) {
    this.batch.uploadAvatar(event); 
   } 

}

