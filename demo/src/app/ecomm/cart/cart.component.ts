import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productQuantity: any;

  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    quantity: number;
    status: string;
  }>();

  onAddProduct(productNameInput: HTMLInputElement) {
    this.productAdded.emit({
      productName: productNameInput.value,
      quantity: this.productQuantity,
      status: this.productQuantity.value > 0 ? 'InStock' : 'OutOfStock',
    });
  }

  onAddproduct() {}
}
