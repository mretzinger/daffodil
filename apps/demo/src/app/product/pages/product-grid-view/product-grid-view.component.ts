import { Component, ViewChild } from '@angular/core';
import { ProductGridContainer } from '@daffodil/state';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent {

  @ViewChild('ProductGridContainer') ProductGridContainer: ProductGridContainer;
  constructor() { }
}