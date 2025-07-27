import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { PageLayoutComponent } from '../../../components/page-layout/page-layout.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { ProductComponent } from '../../../components/products/product/product.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PageLayoutComponent, ProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  currentProduct = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return this.productsService.products().find((product) => product.id === id);
  });

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
}
