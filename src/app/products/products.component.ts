import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  products : Array<any> = [
  ];
  ngOnInit(): void {
    this.getProducts();
  }
  handleCheckProduct(product: any) {
    this.httpClient.patch<any>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked})
      .subscribe({
        next : updatedProduct => {
          product.checked = !product.checked;
          //this.getProducts();
        }
      })

  }

  getProducts(){
    this.httpClient.get<Array<any>>("http://localhost:8089/products").subscribe({
      next : data => {
        this.products = data
      },
      error : err => {
        console.log(err)
      }
    })
  }
}
