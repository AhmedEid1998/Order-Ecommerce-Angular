import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ShopComponent } from './home/shop/shop.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:AllProductsComponent},
  {path:'details/:id', component:ProductDetailsComponent},
  {path:'shop', component:ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
