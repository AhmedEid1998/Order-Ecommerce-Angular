import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  getProducts(limit:number):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products?limit=${limit}`)
  }

  getProductById(id:string):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/categories`)
  }

}
