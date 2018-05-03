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
  isValid = true;
  userRole : string;
  profilePic: string;

  constructor(private router:Router, private user:UserService) {
    this.userService = user;
  }

  ngOnInit() {
  }

  addUser(){
    const username = document.forms['userForm']['username'].value;
    const fname = document.forms['userForm']['fname'].value;
    const lname= document.forms['userForm']['lname'].value;
    const initials = document.forms['userForm']['initials'].value;
    const nic= document.forms['userForm']['nic'].value;
    const gender= document.forms['userForm']['gender'].value;
    const dob = document.forms['userForm']['dob'].value;
    const stream = document.forms['userForm']['stream'].value;
    const email= document.forms['userForm']['email'].value;
    const address= document.forms['userForm']['address'].value;
    const tp= document.forms['userForm']['tp'].value;
    const password = document.forms['userForm']['password'].value;
    const passwordC = document.forms['userForm']['passwordC'].value;
    const college = document.forms['userForm']['college'].value;
    const linkedIn= document.forms['userForm']['linkedIn'].value;
    const fb= document.forms['userForm']['fb'].value;


    //console.log(this.validate()+ " validate status")

    const uname = username.substring(0,6);

    if(username == '150596C'){
      this.userRole = 'Admin';
      
    }else if (uname == '150589' || uname == '150566'){
      this.userRole = 'BatchRepresentative';
      //console.log("User Role is :"+this.userRole);
    }else{
      this.userRole = 'Student';
      //console.log("User Role is :"+this.userRole);
    }

    //console.log("User Role is :"+this.userRole);

    if(gender == 'Female'){
      this.profilePic = 'girl.png';
    }else{
      this.profilePic = 'boy.png';
    }

    if(this.validate()){

      if(password === passwordC){
        console.log("pw matching");
        this.user.addUser({
          username: username,
          fname: fname,
          lname: lname,
          initials: initials,
          nic: nic,
          gender: gender,
          dob: dob,
          stream: stream,
          email: email,
          address: address,
          tp: tp,
          password: password,
          college: college,
          linkedIn: linkedIn,
          fb: fb,
          profilePic: this.profilePic,
          userRole : this.userRole

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


  validate(){

    const username = document.forms['userForm']['username'].value;
    const fname = document.forms['userForm']['fname'].value;
    const lname= document.forms['userForm']['lname'].value;
    const initials = document.forms['userForm']['initials'].value;
    const nic= document.forms['userForm']['nic'].value;
    const gender= document.forms['userForm']['gender'].value;
    const dob = document.forms['userForm']['dob'].value;
    const stream = document.forms['userForm']['stream'].value;
    const email= document.forms['userForm']['email'].value;
    const address= document.forms['userForm']['address'].value;
    const tp= document.forms['userForm']['tp'].value;
    const password = document.forms['userForm']['password'].value;
    const passwordC = document.forms['userForm']['passwordC'].value;
    const college = document.forms['userForm']['college'].value;
    const linkedIn= document.forms['userForm']['linkedIn'].value;
    const fb= document.forms['userForm']['fb'].value;

    const today = new Date();
    const day = Date.parse(dob);
    const username1 = username.substring(0,6);
    console.log(username1);
    var regexNum=/^[0-9]+$/;
    var regexLtr=/^[a-zA-Z]+$/;

    var valUsername = this.validateUsername(username, regexLtr, regexNum);
    var valFname = this.validateFname(fname, regexLtr);
    var valLname = this.validateLname(lname, regexLtr);
    var valInitials = this.validateInitials(initials, regexNum, regexLtr);
    var valNIC = this.validateNIC(nic, regexLtr, regexNum);
    var valDoB = this.validateDoB(today, day);
    var valEmail = this.validateEmail(email);
    var valTP = this.validateTp(tp, regexNum);
    var valLinkedIn = this.validateLinkedIn(linkedIn);
    var valFB = this.validateFb(fb);
    var valPassword = this.valiadatePassword(password);
    var valAddress = this.validateAddress(address);
    var valScl = this.validateScl(college);

    if(valUsername && valFname && valLname && valNIC && valDoB && valEmail && valAddress && valTP && valScl && valLinkedIn && valFB && valPassword){
      return true;
    }else{
      return false;
    }

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

  valiadatePassword(password){
    if(password.length < 8){   // password validation
      alert('Password should atleast have 8 characters!');
      document.forms['userForm']['password'].value ='';
      document.forms['userForm']['passwordC'].value ='';
      return false;
    }else{
      return true;
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

  validateEmail(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){ //email validation
      const last = email.substring(email.length-17,email.length);
      console.log(last + " Email");

      if(last.match('.15@cse.mrt.ac.lk')){
        return true;
      }else{
        alert('CSE mail address seems incorrect!');
        document.forms['userForm']['email'].value ='';
        document.forms['userForm']['email'].focus();
        return false;
      }
    }else{
      alert('CSE mail address seems incorrect!');
      document.forms['userForm']['email'].value ='';
      document.forms['userForm']['email'].focus();
      return false;
    }
  }

  validateDoB(today, day){
    if(today <= day){      //validate the birthday
      alert('Please enter the correct birthday');
      document.forms['userForm']['dob'].value ='';
      return false;
    }else{
      return true;
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

  validateInitials(initials, regexNum, regexLtr){
    if(initials.length > 5){
      return true;
    }else{
      alert('It seems name with initials is incorrect!');
      return false;
    }
  }

  validateNIC(nic, regexLtr, regexNum){
    if(this.validateLength(nic, 10)){ //validate the NIC
      const last = nic.substring(9,10);
      const first = nic.substring(0,9);

      if((last.match('v') || last.match('V')) && first.match(regexNum)){
        return true;
      }else{
        alert("NIC is invalid");
        document.forms['userForm']['nic'].value = '';
        return false;
      }
    }else{
      alert("NIC is invalid");
      document.forms['userForm']['nic'].value = '';
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

  validateScl(college){
    if(college.length >5 ){
      return true;
    }else{
      alert('College / School is invalid!');
      return false;
    }
  }

  validateUsername(username, regexLtr, regexNum){
    if(this.validateLength(username,7)){    //validate the username
      const last = username.substring(6,7);
      const first = username.substring(0,3);
      const middle = username.substring(3,6);

      if(last.match(regexLtr) && first.match('150') && middle.match(regexNum)){ //check the validity of subtrings of username
        return true;
      }else{
        alert('Username is invalid');
        document.forms['userForm']['username'].value = '';
        return false;
      }
    }else{
      alert("Username is invalid");
      document.forms['userForm']['username'].value = '';
      return false;
    }
  }

}

