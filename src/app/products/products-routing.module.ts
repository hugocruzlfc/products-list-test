import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'details/:id',

    loadChildren: () =>
      import('./product-item-description/product-item-description.module').then(
        (m) => m.ProductItemDescriptionModule
      ),
  },

  {
    path: 'list',
    loadChildren: () =>
      import('./products-list/products-list.module').then(
        (m) => m.ProductsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
