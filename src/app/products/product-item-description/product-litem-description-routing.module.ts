import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDescriptionComponent } from './product-item-description.component';

const routes: Routes = [
  { path: '', component: ProductItemDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListRoutingModule {}
