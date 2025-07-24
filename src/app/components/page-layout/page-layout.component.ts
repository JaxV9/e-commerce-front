import { Component, input } from '@angular/core';
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

  constructor(public userAuthenticationService: UserAuthenticationService) {}

  async login() : Promise<void> {
    const payload = {
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value
    };
    console.log(payload)
    this.userAuthenticationService.login(payload)
  }

  async signup() : Promise<void> {
    const payload = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      role: "USER"
    };
     console.log(payload)
    this.userAuthenticationService.register(payload)
  }
}
