import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products : Array<any> = [
    {id:1,name:"PC",price:100,checked:false},
    {id:2,name:"Stylo",price:200,checked:true},
    {id:3,name:"Regle",price:300,checked:false},
    {id:4,name:"Gomme",price:400,checked:true},
    {id:5,name:"Cahier",price:500,checked:false}
  ];

  handleCheckProduct(product: any) {
    product.checked = !product.checked;
  }
}
