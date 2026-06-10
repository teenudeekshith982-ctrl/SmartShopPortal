import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/productService';


@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {

  products = signal<any[]>([]);
  isLoading = signal(true);

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(data => {

        this.products.set(data);

        this.isLoading.set(false);

      });

  }
}