import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userService: UserService;
  valUserName: string;
  valPassword: string;

  constructor(private router:Router, private user:UserService) { 
    this.userService = user;
  }

  ngOnInit() {
  }

  addUser(){
    const username = document.forms['userForm']['username'].value;
    const password = document.forms['userForm']['password'].value;
    this.user.addUser({
      username: username,
      password: password
    }).subscribe(result => {
      console.log(result);
      alert('Successfully signedup!');
    }, error => {
      console.log(error);
    }
  );
  }

}
