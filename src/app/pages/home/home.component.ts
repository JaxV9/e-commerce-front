import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public productsService: ProductsService) {}
}
