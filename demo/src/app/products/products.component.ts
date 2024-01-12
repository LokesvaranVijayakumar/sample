import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  allowNewProduct='true';
  productCreationStatus='No Product Added';
  productName='Default Product';
  productCreated = false;

  products: string[] = [];

  onCreateProduct(){
    this.products.push(this.productName);
    this.productCreationStatus='Product Added';
    this.productCreated = true;
    console.log(this.products);
    
  }
}
