import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProductsComponent } from '../shared/products/products.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { error } from 'console';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CommonModule,
  ],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        console.log('Received products:', products);
        if (products && products.length > 0) {
          this.productList = products;
          console.log('Product list:', this.productList);
        } else {
          console.log('No products received or empty array.');
        }
      },
      (error) => {
        console.error('Error fetching products:', error); // Log detailed error
      },
    );
  }
}
