import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrl: './templateforms.component.css'
})
export class TemplateformsComponent implements OnInit {
  

  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','Canada'),
    new Country('3','Russia'),
  ];

  contact!: Contact;

  ngOnInit(): void {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachinTen@gmail.com',
      gender: 'male',
      married: true,
      country: '3'
    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    
  }
  
}

class Country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}

class Contact{
  firstname!:string;
  lastname!:string;
  email!:string;
  gender!:string;
  married!: boolean;
  country!:string;
}
