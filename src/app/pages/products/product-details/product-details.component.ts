import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../components/page-layout/page-layout.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {}
