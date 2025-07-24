import { Injectable, signal } from '@angular/core';
import { QuickHttp, ResAction } from '@jaslay/http';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>([]);

  baseUrl: string = 'https://e-commerce-back-production-6b36.up.railway.app/';
  headers = {
    'Content-Type': 'application/json',
  };
  quickHttp: QuickHttp;

  constructor() {
    this.quickHttp = new QuickHttp(this.baseUrl, this.headers);
  }

  async loadProducts() {
    const response = await this.quickHttp.get('api/products');
    const payload = response.payload as Product[];
    this.products.set(payload);
  }
}
