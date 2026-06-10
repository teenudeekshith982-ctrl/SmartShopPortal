import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  constructor(private http : HttpClient){
    
    
  }

  getProducts() {

  return this.http.get<any>(
    'https://dummyjson.com/products'
  ).pipe(

    map( response => response.products)

  );

}

getProductById(id : number){
  return this.http.get(`https://dummyjson.com/products/${id}`);
}
}
