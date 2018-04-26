import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css','./skel.css','./style.css','./style-xlarge.css','./font-awesome.min.css']
})

export class PeopleComponent implements OnInit {

  userService: UserService;
  students: any[];

  constructor(private router: Router, private student: UserService) {
    this.userService = student;
  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(){
    this.student.getMembers().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log(error);
      }
    );
  }

}
