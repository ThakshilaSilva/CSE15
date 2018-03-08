import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  login(){
      
      var username = document.forms['loginForm']['uname'].value;
      var password = document.forms['loginForm']['psw'].value;
      
      this.user.queryUser({
        username: username
      }).subscribe(
        result => {
          if(result[0].password === password){
            alert('You are logged in!');
            this.router.navigate(['dashboard']);
          }else{
            alert('Invalid user!');
          }
        }, error => {
          console.log(error);
          alert('Not a valid user!');
        }
      );

  }

}
