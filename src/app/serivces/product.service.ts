import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public getProduct() : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>("http://localhost:8089/products");
  }
  public checkProduct(product:Product) : Observable<Product>{
    return this.httpClient.patch<Product>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
  }
  public deleteProduct(product:Product){
    return this.httpClient.delete<Product>(`http://localhost:8089/products/${product.id}`)
  }

}
