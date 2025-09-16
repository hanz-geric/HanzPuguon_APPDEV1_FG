import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, RouterLink]
})
export class CartComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  productId!: number;
  product: any;

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(this.productId);
  }
}