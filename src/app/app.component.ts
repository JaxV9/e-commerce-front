import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { UserAuthenticationService } from './services/user-authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private userAuthenticationService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    this.productsService.loadProducts();
    this.userAuthenticationService.loadUserInfos();
  }
}
