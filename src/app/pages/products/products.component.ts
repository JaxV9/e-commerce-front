import { Component, effect, OnInit } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { ProductsService } from '../../services/products.service';
import { ProductsUIComponent } from '../../components/products/products.component';
import { ProductComponent } from '../../components/products/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PageLayoutComponent, ProductsUIComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(public productsService: ProductsService) {
    effect(() => {
      console.log(this.productsService.products());
    });
  }
}
