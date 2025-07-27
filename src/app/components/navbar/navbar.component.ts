import { Component, effect, signal, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userIsConnected = signal<boolean>(false);

  constructor(private userAuthenticationService: UserAuthenticationService) {
    effect(() => {
      if (this.userAuthenticationService.user()) {
        this.userIsConnected.set(false);
      } else {
        this.userIsConnected.set(true);
      }
    });
  }

  openSignInModal(): void {
    this.userAuthenticationService.loginModalIsActive.update((value) => !value);
    this.userAuthenticationService.signupModalIsActive.set(false);
  }
  openSignUpModal(): void {
    this.userAuthenticationService.signupModalIsActive.update(
      (value) => !value
    );
    this.userAuthenticationService.loginModalIsActive.set(false);
  }
}
