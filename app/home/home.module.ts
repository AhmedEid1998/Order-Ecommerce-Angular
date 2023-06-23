import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
  ]
})
export class HomeModule { }
