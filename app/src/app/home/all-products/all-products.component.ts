import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private _AuthService:AuthService){
  //  this.allProducts()
  }

  products:any [] = []
  isLoading:boolean = true
  details:any
  ratingArr:any [] = []
  
 ngOnInit(): void {
   this.trendProducts()
 }

  trendProducts(){
    this._AuthService.getProducts(20).subscribe(((response)=>{
      this.products = response.products
      this.isLoading = false
    }))
  }

  getDetails(id:number){
    // console.log(this.products[id])
    this.details = this.products[id]
    $('.details-img').attr('src', this.details.thumbnail)
    
    $('.details-title').html(this.details.title)
    $('.details-category').html(this.details.category)
    $('.details-brand').html(this.details.brand)
    $('.details-description').html(this.details.description)
    $('.details-discountPercentage').html(this.details.discountPercentage)
    // $('.details-rating').html(this.details.rating)
    for (let i = 1; i < this.details.rating; i++) {
      this.ratingArr.push(i)
    }
    $('.details-priceDis').html((this.details.price - (this.details.price /100* this.details.discountPercentage)).toFixed(2))
    $('.details-price').html(this.details.price)
    $('.details-stock').html(this.details.stock)
    
    $('.mainPopUp').css('display', 'flex')
    $(".popUp").animate({width:'90%'} , (900), ()=>{
      $(".popUp .row .details-img ").slideDown( (900) , () => {
        $(".popUp .row .pro-info ").slideDown(900)
    } )
    })

  }

  hidePopUp(){
        $(".popUp .row .pro-info ").slideUp(900, ()=>{
          $(".popUp .row .details-img ").slideUp( (900) , ()=>{
            $(".popUp").animate({width:'75px'} , (900), ()=>{
              $('.mainPopUp').slideUp(900)
            })
          })
        })
  }

  showPopUp(){
    $('.mainPopUp').css('display', 'flex')
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<<<','>>>'],
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
        items: 5
      }
    },
    nav: true
  }

}
