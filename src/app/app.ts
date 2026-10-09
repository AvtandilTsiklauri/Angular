import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    {
      id: 1,
      name: 'Keyboard',
      price: 50,
      department: 'Electronics',
      sku: 'KEY001'
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      department: 'Electronics',
      sku: 'MOU001'
    },
    {
      id: 3,
      name: 'Notebook',
      price: 5,
      department: 'Stationery',
      sku: 'NOT001'
    }
  ];

  addProduct(
    name: string,
    price: string,
    department: string,
    sku: string
  ): void {
    if (
      name.trim() === '' ||
      price.trim() === '' ||
      department.trim() === '' ||
      sku.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    const numericPrice = Number(price);

    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      alert('Price must be a number greater than 0.');
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      price: numericPrice,
      department: department.trim(),
      sku: sku.trim()
    };

    this.products.push(newProduct);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  getTotalValue(): number {
    let total = 0;

    for (const product of this.products) {
      total += product.price;
    }

    return total;
  }
}