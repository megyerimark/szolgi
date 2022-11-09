import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products !: any
  productService: any;
  constructor( productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.products = this.productService.getProduct();

  }

}
