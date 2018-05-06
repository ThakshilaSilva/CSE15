import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css']
})
export class AcheivementsComponent implements OnInit {

  acheivements: any[];
  userService: UserService;
  

  constructor(private router: Router, private user: UserService) {
    this.userService = user;
   }

  ngOnInit() {
    this.getAchievemnets();
  }

  getAchievemnets(){
    var username = sessionStorage.getItem('id');

    this.user.queryAchievements({
      username: username
    }).subscribe(
      achievements =>{ 
        //console.log(result[0]);
        this.acheivements = achievements;
        console.log(this.acheivements);
      },
      error => {
        console.log(error);
      }
    )

  }

  addAcheivement(){

    var username = sessionStorage.getItem('id');

    const achievementName = document.forms['userForm']['achievementName'].value;
    const field = document.forms['userForm']['field'].value;
    const type = document.forms['userForm']['type'].value;
    const description = document.forms['userForm']['description'].value;
    const date = document.forms['userForm']['date'].value;

   
      this.user.addAchievement({
        username: username,
        field: field,
        type: type,
        achievementName: achievementName,
        description: description,
        date: date
      }).subscribe(
        result => {
          console.log("hello");
          alert("Successfully added your achievement");
          location.reload();
        }, error =>{
          console.log("hi");
          console.log(error);
        }
      );
    

    
  }
}
