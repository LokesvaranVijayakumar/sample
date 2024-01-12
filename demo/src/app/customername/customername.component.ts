import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customername',
  templateUrl: './customername.component.html',
  styleUrl: './customername.component.css',
})
export class CustomernameComponent {
  // users = [
  //   { name: 'ram', email: 'ram@gmail.com', phone: '9876543210' },
  //   { name: 'sri', email: 'sri@gmail.com', phone: '9876543210' },
  //   { name: 'naveen', email: 'naveen@gmail.com', phone: '9876543210' },
  //   { name: 'susan', email: 'susan@gmail.com', phone: '9876543210' },
  // ];

  users: any;

  constructor(userService: UserService) {
    this.users = userService.getUser();
  }
}
