import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(private _AuthService:AuthService){this.categories()}

  categoriesType:any [] = []
  categories(){
    this._AuthService.getCategories().subscribe((response)=>{
      this.categoriesType = response
      console.log(this.categoriesType)
    })
  }

  filterData(info:any){
    console.log(info)
  }
}
