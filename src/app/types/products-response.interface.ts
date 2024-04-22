import { Product } from './product.interface';

export interface ProductResponse {
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
