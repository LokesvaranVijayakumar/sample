import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomers() {
    return this.http.get('https://fakerestapi.azurewebsites.net/api/v1/Users');
  }

  saveCustomer(data: any) {
    return this.http.post(
      'https://fakerestapi.azurewebsites.net/api/v1/Users',
      data
    );
  }
}
