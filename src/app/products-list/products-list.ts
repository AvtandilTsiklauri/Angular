import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {
  @Input() products: Product[] = [];

  @Output() deleteProduct = new EventEmitter<number>();
}