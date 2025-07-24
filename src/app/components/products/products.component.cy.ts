import { ProductsUIComponent } from './products.component';

describe('ProductsComponent', () => {
  it('should mount', () => {
    cy.mount(ProductsUIComponent);
  });
});
