import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css','./css/main.css','./css/util.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  login(){
      
      var username = document.forms['loginForm']['uname'].value;
      var password = document.forms['loginForm']['psw'].value;
      //console.log(password);
      
      this.user.queryUser({
        username: username
      }).subscribe(
        result => {
          //console.log(username);
          //console.log(result[0]);
          //console.log("pwd "+result[0].Password);
          if(result[0].Password === password){
            this.user.setUsername(username);
            var u = this.user.getUsername();
            alert('You are logged in!');
            sessionStorage.setItem('id',username);
            this.router.navigate(['']);
            
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
