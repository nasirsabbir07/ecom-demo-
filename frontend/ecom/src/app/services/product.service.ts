import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      map((data: Product[]) => {
        return data;
      }),
    );
  }
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productUrl).pipe(
  //     tap((data: Product[]) => {
  //       console.log('Products from API:', data);
  //     }),
  //     catchError((error: any) => {
  //       console.error('Error fetching products:', error);
  //       return throwError(error);
  //     }),
  //   );
  // }
}
