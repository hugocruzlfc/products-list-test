import { Component } from '@angular/core';
import { Product } from '../../types';
import { ProductsListService } from './products-list.service';
import { NavigationExtras, Router } from '@angular/router';
import { parseProductsName } from '../../utils';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  products: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private readonly productListService: ProductsListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productListService.getProductData().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }

  goToProductDescription(currentProduct: Product) {
    const nameToId = parseProductsName(currentProduct.Name);

    const urlData: NavigationExtras = {
      state: {
        product: currentProduct,
      },
    };

    this.router.navigate([`/products/details/${nameToId}`], urlData);
  }
}
