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
  currentPage: number = 1;
  pageSize: number = 12;
  totalPages: number = 0;
  totalProducts: number = 0;

  constructor(
    private readonly productListService: ProductsListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
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

  loadProducts() {
    this.isLoading = true;
    this.productListService
      .getProductData(this.currentPage, this.pageSize)
      .subscribe(({ products, totalPages, totalProducts }) => {
        this.products = products;
        this.totalPages = totalPages;
        this.totalProducts = totalProducts;
        this.isLoading = false;
      });
  }

  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }
}
