import { Component, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  test = signal('true');
  constructor(private userAuthenticationService: UserAuthenticationService) {}

  openSignInModal(): void {
    this.userAuthenticationService.loginModalIsActive.set(true);
  }
  openSignUpModal(): void {
    this.userAuthenticationService.signupModalIsActive.set(true);
  }
}
