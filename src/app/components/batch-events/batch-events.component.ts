import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchServiceService } from '../../services/batch-service.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';
import { Url } from 'url';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-batch-events',
  templateUrl: './batch-events.component.html',
  styleUrls: ['./batch-events.component.css','./skel.css','./style.css','./style-xlarge.css','./font-awesome.min.css']
})
export class BatchEventsComponent implements OnInit {

  batchService: BatchServiceService;
  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

  constructor(private router: Router, private batch: BatchServiceService) {
    this.batchService = batch;
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));

  }
   }

  ngOnInit() {
  }

  addEvent(){

    const eventName = document.forms['userForm']['eventName'].value;
    const date = document.forms['userForm']['date'].value;
    const description =document.forms['userForm']['description'].value;
    const photo1 = this.attachmentList[0].uploadname;
    const photo2 = this.attachmentList[1].uploadname;
    const photo3 = this.attachmentList[2].uploadname;
    const photo4 = this.attachmentList[3].uploadname;

    const album1 = document.forms['userForm']['album1'].value;
    const album02 = document.forms['userForm']['album2'].value;
    const album03 = document.forms['userForm']['album3'].value;

    const today =  new Date();
    const day = new Date(date);

    if(today < day){
      alert('Please enter the correct date of the event');
      document.forms['userForm']['date'].value = ' ';
    }
    else{
      this.batch.addEvent({

        eventName: eventName,
        date: date,
        description: description,
        photo1: photo1,
        photo2: photo2,
        photo3: photo3,
        photo4: photo4,
        album1: album1,
        album2: album02,
        album3: album03
      }).subscribe(result => {
        console.log("Result"+result);
        alert('Successfully event added!');
      }, error => {
        console.log(error);
      }
      );
    }


  }
  

}
