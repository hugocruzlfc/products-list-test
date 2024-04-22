import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import jsonFilePath from '../../shared/data/products.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  constructor(private http: HttpClient) {}

  getProductData(): Observable<Product[]> {
    //return this.http.get<Product[]>('API_URL');

    const products: Product[] = jsonFilePath;

    const productsWithUUID = products.map((product, index) => {
      const productWithUUID: Product = {
        ...product,
        ID: uuidv4(),
      };
      return productWithUUID;
    });

    // Simula una llamada API con un retraso de 1 segundos
    return of(productsWithUUID).pipe(delay(1000));
  }
}
