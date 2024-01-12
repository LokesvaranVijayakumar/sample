import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  title = 'Angular pipes';

  currency = 100;

  decimalnum = 12.333345;

  jsonData = { name: 'ram' };
}
