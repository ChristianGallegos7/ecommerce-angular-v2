import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  baseUrl = 'https://fakestoreapi.com/products';

  private _http = inject(HttpClient)

  getAllProducts() {
    return this._http.get<Product[]>(this.baseUrl)
  }



}
