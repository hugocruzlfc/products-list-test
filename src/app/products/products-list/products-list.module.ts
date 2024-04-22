import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsListRoutingModule],
})
export class ProductsListModule {}
