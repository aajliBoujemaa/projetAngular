import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductService} from "../serivces/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService) { }
  products : Array<Product> = [];
  //products$ !: Observable<Array<Product>>;
  ngOnInit(): void {
    this.getProducts();
  }
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
        next : updatedProduct => {
          product.checked = !product.checked;
          //this.getProducts();
        }
      })

  }

  /*
  getProducts(){
   this.products =  this.productService.getProduct();
  }*/

  getProducts(){
    this.productService.getProduct().subscribe({
      next : data => {
        this.products = data
      },
      error : err => {
        console.log(err)
      }
    })
  }
  handleDelete(product: Product) {
    if(confirm("Etes vous sure ?"))
    this.productService.deleteProduct(product).subscribe({
      next: value => {
        //this.getProducts();
        this.products = this.products.filter(p=> p.id != product.id)
      }
    });
  }
}
