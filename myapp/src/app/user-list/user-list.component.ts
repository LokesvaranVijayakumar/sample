import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:User[]=[];

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.getUsers().subscribe((response)=>{
      this.users = response;
    })
  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  addUser(){
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value
    });
  }

  onSubmit(){
    this.addUser().subscribe((response)=>{
      this.users.push(response);
    })
    
  }

}

class User{
  name!: string;
  email!: string;
}
