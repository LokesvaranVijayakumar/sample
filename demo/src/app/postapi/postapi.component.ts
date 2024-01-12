import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css',
})
export class PostapiComponent {
  constructor(private customerService: CustomerService) {}
  saveCustomer(data: any) {
    this.customerService.saveCustomer(data).subscribe((result) => {
      console.log(result);
    });
  }
}
