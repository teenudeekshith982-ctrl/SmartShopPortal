import { Component } from '@angular/core';
import { ProductService } from '../../services/productService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {

  products : any[] = [];
  isLoading : boolean = true;
  
  constructor(private productservice : ProductService){
    console.time('products');
    productservice.getProducts().subscribe(data =>{
      console.log(data);
       console.timeEnd('products');
      this.products = data;
      this.isLoading = false;
    })
  }

}
