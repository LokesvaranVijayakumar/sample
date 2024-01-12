import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // @Input('carsInput') cars:string[] = [];
  cars:string[] = [];
  carDataUpdated(carsData:string[]){
    this.cars=carsData;
  }
}
