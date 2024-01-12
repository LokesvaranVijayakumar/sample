import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // @Input()
  // item = '';
  // @Input()
  // item1 = '';

  @Output()
  dataoutputemitted = new EventEmitter<string>();
}
