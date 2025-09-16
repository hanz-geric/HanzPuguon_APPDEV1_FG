
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = [
    { id: 1, name: 'iPhone 15 Pro', price: 95000 + "PHP", stock: 10 },
    { id: 2, name: 'Samsung S24 Ultra', price: 82000 + "PHP", stock: 15 },
    { id: 3, name: 'MacBook Air M3', price: 75000 + "PHP", stock: 8 },
    { id: 4, name: 'Iphone 20 Ultra Giga Pro Max', price: 175000 + "PHP", stock: 20 },
    { id: 5, name: 'Cherry Mobile Pro Max', price: 275000, stock: 0 }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}