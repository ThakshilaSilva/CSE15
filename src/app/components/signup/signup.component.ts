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
    const fname = document.forms['userForm']['fname'].value;
    const lname= document.forms['userForm']['lname'].value;
    const nic= document.forms['userForm']['nic'].value;
    const gender= document.forms['userForm']['gender'].value;
    const dob = document.forms['userForm']['dob'].value;
    const stream = document.forms['userForm']['stream'].value;
    const email= document.forms['userForm']['email'].value;
    const address= document.forms['userForm']['address'].value;
    const tp= document.forms['userForm']['tp'].value;
    const password = document.forms['userForm']['password'].value;
    const passwordC = document.forms['userForm']['passwordC'].value;
    const linkedIn= document.forms['userForm']['linkedIn'].value;
    const fb= document.forms['userForm']['fb'].value;

   

    if(password === passwordC){
      console.log("pw matching");
      this.user.addUser({
        username: username,
        fname: fname,
        lname: lname,
        nic: nic,
        gender: gender,
        dob: dob,
        stream: stream,
        email: email,
        address: address,
        tp: tp,
        password: password,
        linkedIn: linkedIn,
        fb: fb
      }).subscribe(result => {
        console.log("Result"+result);
        alert('Successfully signedup!');
      }, error => {
        console.log(error);
      }
      );
    }else{
      alert('Password Doesnot matching!')
    }

    
  }

}
