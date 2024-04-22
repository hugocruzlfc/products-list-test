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
  ratings: number = 0;
  votes: number = 0;

  constructor(private router: Router, private location: Location) {
    const navigation = this.router.getCurrentNavigation();

    this.currentProduct =
      navigation?.extras?.state!['product'] || ({} as Product);

    if (typeof this.currentProduct.Reviews === 'object') {
      this.ratings = this.currentProduct.Reviews.rating || 0;
      this.votes = this.currentProduct.Reviews.votes || 0;
    }
  }

  goBack(): void {
    this.location.back();
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  calculateStars(): number[] {
    if (
      typeof this.currentProduct.Reviews === 'string' ||
      !this.currentProduct.Reviews.rating
    ) {
      return [];
    }
    const rating = this.currentProduct.Reviews.rating;
    const numFullStars = Math.floor(rating!);
    const numHalfStar = rating % 1 === 0.5 ? 1 : 0;
    const stars = Array(numFullStars)
      .fill(1)
      .concat(Array(numHalfStar).fill(0.5));
    return stars;
  }
}
