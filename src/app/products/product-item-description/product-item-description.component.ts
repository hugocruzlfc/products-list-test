import { Component } from '@angular/core';
import { Product } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
})
export class ProductItemDescriptionComponent {
  currentProduct: Product = {} as Product;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    this.currentProduct = navigation?.extras?.state!['product'];
  }
}
