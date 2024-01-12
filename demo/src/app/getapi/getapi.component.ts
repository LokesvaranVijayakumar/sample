import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css',
})
export class GetapiComponent {
  customers: any;

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
