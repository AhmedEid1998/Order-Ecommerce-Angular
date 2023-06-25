import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $:any
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _AuthService:AuthService, _ActivatedRoute:ActivatedRoute){
    this.id = _ActivatedRoute.snapshot.params['id']
    this.index = Number(this.id)
  }
  id:string = ''
  details:any
  isLoading:boolean = false
  index:number = 0
  carouselSugestions:any [] = []
  ngOnInit(): void {
    // this.index = Number(this.id)
    this.getProductDetails()
  }

  getProductDetails(){
    this._AuthService.getProductById(this.id).subscribe((response)=>{
      this.details = response
      this.isLoading = true
      // console.log(this.details)
      // console.log(this.index)
    })

    this._AuthService.getProducts(28).subscribe((res) =>{
      this.carouselSugestions = res.products.splice(this.index-1 , 5)
      // console.log(this.carouselSugestions)
    })
  }

  imageInfo(info:any){
    // console.log(info.target.currentSrc)
    $('.details-img').attr('src', info.target.currentSrc)
    // console.log(info.target.attributes[1].nodeValue)
  }

  carouseldetails(id:number){
    this.details = this.carouselSugestions[id]
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
