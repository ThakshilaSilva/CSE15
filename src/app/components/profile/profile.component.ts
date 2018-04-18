import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users;
  userService: UserService;
  message: string;
  
  //id = sessionStorage.getItem('id');
  

  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) {
    this.userService = user;
  }

  ngOnInit() {
    
    this.getUser();
  }

  getUser(){
    var username = sessionStorage.getItem('id');
    this.user.queryUser({
      username: username
    }).subscribe(
      result => {
        console.log(result[0]);
        this.users = result[0]
        
      },
      error => {
        console.log(error);
        
      }
    )
    
  }

  cancel(){
    this.router.navigate(['']);
    console.log("edited");
  }

  update(){

    var username = sessionStorage.getItem('id');
    //const firstname = document.forms['userForm']['firstName'].value;
    console.log(username);
    const firstname= document.forms['userForm']['firstname'].value;
    const lastname= document.forms['userForm']['lastname'].value;
    const tp= document.forms['userForm']['tp'].value;
    const address= document.forms['userForm']['address'].value;
    const fb= document.forms['userForm']['fb'].value;
    const linkedIn= document.forms['userForm']['linkedIn'].value;

    this.user.updateUser({
      firstname: firstname,
      lastname: lastname,
      tp: tp,
      address: address,
      fb: fb,
      linkedIn: linkedIn,
      username: username
    }).subscribe(
      result => {
        console.log("hello");
        console.log("Result :"+result[0]);
        alert("Successfully updated your profile");
      }, error =>{
        console.log("hi");
        console.log(error);
      }
    );

  }

}
