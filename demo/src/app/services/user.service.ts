import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser() {
    return [
      { name: 'ram', email: 'ram@gmail.com', phone: '9876543210' },
      { name: 'sri', email: 'sri@gmail.com', phone: '9876543210' },
      { name: 'naveen', email: 'naveen@gmail.com', phone: '9876543210' },
      { name: 'susan', email: 'susan@gmail.com', phone: '9876543210' },
    ];
  }
}
