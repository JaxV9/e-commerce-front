import { Component, input, Injectable } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NavbarComponent, ModalComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css',
})
export class PageLayoutComponent {
  title = input<string>();

  constructor(public userAuthenticationService: UserAuthenticationService, public navbarComponent: NavbarComponent) {}

  async login() : Promise<void> {
    const payload = {
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value
    };
    this.userAuthenticationService.login(payload)
    this.navbarComponent.openSignInModal()
  }

  async signup() : Promise<void> {
    const payload = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      role: "USER"
    };
    this.userAuthenticationService.register(payload)
    this.navbarComponent.openSignUpModal()
  }
}
