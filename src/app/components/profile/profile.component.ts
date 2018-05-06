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

  users={};
  userService: UserService;
  message: string;
 
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

  validateLength(a : string, b: number){   //validate the length of an input
    if(a.length != b){
      return false;
    }else{
      return true;
    }
  }

  ValidateURL(str) { //validate url
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      return false;
    } else {
      return true;
    }
  }

  validateFb(fb){   //validate fb
    if(this.ValidateURL(fb)){
      return true;
    }else{
      alert('Please enter a valid facebook url!');
      document.forms['userForm']['fb'].value ='';
      return false;
    }
  }

  validateLinkedIn(linkedIn){ //validate linkedIn
    if(this.ValidateURL(linkedIn)){
      return true;
    }else{
      alert('Please enter a valid LinkedIn url!');
      document.forms['userForm']['linkedIn'].value ='';
      return false;
    }
  }

  validateTp(tp, regexNum){
    if(this.validateLength(tp, 10)){ //validate tp
      if(tp.match(regexNum)){
        return true;
      }else{
        alert('Phone number is invalid!');
        document.forms['userForm']['tp'].value ='';
        return false;
      }
    }else{
      alert('Phone number is invalid!');
      document.forms['userForm']['tp'].value ='';
      return false;
    }
  }

  validateLname(lname, regexLtr){
    if((lname.match(regexLtr) && (lname.length > 3)) || /\s/g.test(lname)){  //validate the lastname
      return true;
    }else{
      alert('It seems last name is incorrect!');
      return false;
    }
  }

  validateFname(fname, regexLtr){
    if((fname.match(regexLtr) && (fname.length >3)) || /\s/g.test(fname)){  //validate the first name
      return true;
    }else{
      alert('It seems first name is incorrect!');
      document.forms['userForm']['fname'].focus();
      return false;
    }
  }

  validateAddress(address){
    if(address.length > 0){
      return true;
    }else{
      alert('Address is invalid!');
      return false;
    }
  }

  validate(){

    const firstname= document.forms['userForm']['firstname'].value;
    const lastname= document.forms['userForm']['lastname'].value;
    const tp= document.forms['userForm']['tp'].value;
    const address= document.forms['userForm']['address'].value;
    const fb= document.forms['userForm']['fb'].value;
    const linkedIn= document.forms['userForm']['linkedIn'].value;
    
    var regexNum=/^[0-9]+$/;
    var regexLtr=/^[a-zA-Z]+$/;

    var valFname = this.validateFname(firstname, regexLtr);
    var valLname = this.validateLname(lastname, regexLtr);
    var valTP = this.validateTp(tp, regexNum);
    var valLinkedIn = this.validateLinkedIn(linkedIn);
    var valFB = this.validateFb(fb);
    var valAddress = this.validateAddress(address);

    if(valFname && valLname && valAddress && valTP && valLinkedIn && valFB){
      return true;
    }else{
      return false;
    }

  }

}
