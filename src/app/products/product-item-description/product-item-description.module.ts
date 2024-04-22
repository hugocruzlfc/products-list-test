import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemDescriptionComponent } from './product-item-description.component';
import { ProductsListRoutingModule } from './product-litem-description-routing.module';

@NgModule({
  declarations: [ProductItemDescriptionComponent],
  imports: [CommonModule, ProductsListRoutingModule],
})
export class ProductItemDescriptionModule {}
