import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProductsComponent } from '../shared/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
