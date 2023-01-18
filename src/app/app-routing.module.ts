import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent as Home } from './components/counter/counter.component'
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:product',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
