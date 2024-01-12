import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl({
      value: 'Pradeep',
      disabled:false
    }),
    email: new FormControl(),
    gender: new FormControl(),
    married: new FormControl(),
    country: new FormControl(),
  });

  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','Canada'),
    new Country('3','Russia'),
  ];

  onSubmit(){
    console.log(this.contactForm.value);
    
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
