import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  constructor(private _AuthService:AuthService){this.categories()}

  categoriesType:any [] = []
  dataCategory:any [] = []
  isLoading:boolean = true
  products:any [] = []
  ratingArr:any [] = []
  details:any

  ngOnInit(): void {
    this._AuthService.getProducts(100).subscribe((response)=>{
      this.dataCategory = response.products
    })    
  }
  categories(){
    this._AuthService.getCategories().subscribe((response)=>{
      this.categoriesType = response
      this.isLoading = false
      // console.log(this.categoriesType)
    })
  }

  category:string = 'All'
  filterData(info:any){
    // console.log(info.target.innerHTML)
    let category = info.target.innerHTML
    $('.cat-tit').html(category)
    if(category == 'All'){
      this._AuthService.getProducts(100).subscribe((response)=>{
        this.dataCategory = response.products
        this.isLoading = false
        // console.log(this.dataCategory)
      })
    }else{
      this._AuthService.getProductsByCategory(category).subscribe((response)=>{
        this.dataCategory = response.products
        this.isLoading = false
        // console.log(this.dataCategory)
      })
    }
  }

  getDetails(id:number){
    // console.log(this.dataCategory[id])
    this.details = this.dataCategory[id]
    $('.details-img').attr('src', this.details.thumbnail)
    
    $('.details-title').html(this.details.title)
    $('.details-category').html(this.details.category)
    $('.details-brand').html(this.details.brand)
    $('.details-description').html(this.details.description)
    $('.details-discountPercentage').html(this.details.discountPercentage)
    // $('.details-rating').html(this.details.rating)
    this.ratingArr = []
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

}

