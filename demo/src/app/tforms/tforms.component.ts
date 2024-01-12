import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrl: './tforms.component.css',
})
export class TformsComponent {
  defaultQuestion = 'default';
  genders = ['Male', 'Female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };

  onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.user.gender = form.value.gender;
    this.submitted = true;
    form.reset();
  }
}
