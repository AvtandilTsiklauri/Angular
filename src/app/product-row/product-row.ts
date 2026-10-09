import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  standalone: false,
  templateUrl: './product-row.html',
  styleUrl: './product-row.css'
})
export class ProductRow {
  @Input() product!: Product;

  @Output() deleteProduct = new EventEmitter<number>();

  delete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}