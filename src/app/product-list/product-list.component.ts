import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, CurrencyPipe, RouterLink]
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products = this.productService.getProducts();
}