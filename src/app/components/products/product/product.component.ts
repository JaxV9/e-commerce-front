import { Component, input } from '@angular/core';
import { Product } from '../../../models/model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  readonly product = input.required<Product | undefined>();

  formateDate(date: string | undefined) {
    if (date) {
      const currentDate = new Date(date);
      const formatted = currentDate.toLocaleString('fr-FR', {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'Europe/Paris',
      });

      return formatted;
    }
    return '';
  }
}
