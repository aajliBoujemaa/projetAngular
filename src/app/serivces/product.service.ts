import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public searchProduct(keyword: string ="",page:number=1,size:number=4){
    return this.httpClient.get(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'});
  }
  public checkProduct(product:Product) : Observable<Product>{
    return this.httpClient.patch<Product>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
  }
  public deleteProduct(product:Product){
    return this.httpClient.delete<Product>(`http://localhost:8089/products/${product.id}`)
  }

  saveProduct(product: Product) : Observable<Product> {
    return this.httpClient.post<Product>(`http://localhost:8089/products`,product)
  }
  /*public searchProduct(keyword:string,page:number=1,size:number=3) : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`);
  }*/


  getProductById(productId: number) :Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:8089/products/${productId}`)
  }
}
