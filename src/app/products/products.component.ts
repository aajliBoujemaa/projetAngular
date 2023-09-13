import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductService} from "../serivces/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public keyword: string=""
  totalPages : number = 0;
  pageSize : number = 3;
  currentPage : number = 1;
  constructor(private productService : ProductService,private router:Router) { }
  products : Array<Product> = [];
  //products$ !: Observable<Array<Product>>;
  ngOnInit(): void {
    this.searchProduct();
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

  searchProduct(){
    this.productService.searchProduct(this.keyword,this.currentPage,this.pageSize).subscribe({
      next : response => {
        this.products = response.body as Product[];
        let totalProducts: number = parseInt(response.headers.get('x-total-count')!);
        this.totalPages = Math.floor(totalProducts/ this.pageSize);
        if(totalProducts % this.pageSize !=0){
          this.totalPages =this.totalPages + 1;
        }
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

  /*searchProduct() {
    this.currentPage = 1;
    this.totalPages = 0;
    this.productService.searchProduct(this.keyword,this.currentPage,this.pageSize).subscribe(
      {
        next : data=>{
          this.products = data;

        }
      }
    )
  }
*/
  handleGoToPage(page: number) {
    this.currentPage = page;
    this.searchProduct();


  }

  handleEditProduct(product: Product) {
  this.router.navigateByUrl(`/editProduct/${product.id}`)
  }
}
