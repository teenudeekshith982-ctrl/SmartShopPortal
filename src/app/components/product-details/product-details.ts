import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/productService';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  product = signal<any | null>(null);

  productId!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {

    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadProduct();
  }

  loadProduct() {

    this.productService
      .getProductById(this.productId)
      .subscribe(data => {

        console.log(data);

        this.product.set(data);

      });

  }
}