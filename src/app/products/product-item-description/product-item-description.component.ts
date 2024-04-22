import { Component } from '@angular/core';
import { Product } from '../../types';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
})
export class ProductItemDescriptionComponent {
  currentProduct: Product = {} as Product;

  constructor(private router: Router, private location: Location) {
    const navigation = this.router.getCurrentNavigation();

    this.currentProduct =
      navigation?.extras?.state!['product'] || ({} as Product);
  }

  goBack(): void {
    this.location.back();
  }
}
