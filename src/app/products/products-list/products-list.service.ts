import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import jsonFilePath from '../../shared/data/products.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { Product, ProductResponse } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  constructor(private http: HttpClient) {}

  getProductData(page: number, pageSize: number): Observable<ProductResponse> {
    //return this.http.get<Product[]>('API_URL');

    const products: Product[] = jsonFilePath;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / pageSize);

    const productsWithUUID = paginatedProducts.map((product, index) => {
      const productWithUUID: Product = {
        ...product,
        ID: uuidv4(),
      };
      return productWithUUID;
    });

    const response: ProductResponse = {
      products: productsWithUUID,
      totalPages,
      totalProducts: products.length,
    };

    // Simula una llamada API con un retraso de 1 segundos
    return of(response).pipe(delay(1000));
  }
}
