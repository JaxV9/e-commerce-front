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
}
