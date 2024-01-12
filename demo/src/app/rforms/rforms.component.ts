import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrl: './rforms.component.css',
})
export class RformsComponent implements OnInit {
  genders = ['Male', 'Female'];

  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
