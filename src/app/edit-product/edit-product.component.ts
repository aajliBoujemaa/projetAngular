import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../serivces/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId !: number;

  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(
      {
        next :(product)=>{

        },
        error : err => {
          console.log(err)
        }
      }
    );
  }


}
