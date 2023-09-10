import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public getProduct(page:number=1,size:number=4) : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?_page=${page}&_limit=${size}`);
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
  public searchProduct(keyword:string) : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  }

}
