import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productId=10;
  productStatus='InStock';

  getColor(){
    return this.productStatus==='InStock' ? 'green' : 'red';
  }


}
