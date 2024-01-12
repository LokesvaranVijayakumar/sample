import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title = 'project';
  // data = 'Angular 15 Tutorial';

  // updateData(name: string) {
  //   this.data = name;
  // }

  updateTitle(name: string) {
    this.title = name;
  }
}
