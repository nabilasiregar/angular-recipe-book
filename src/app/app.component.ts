import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedNavbar = 'recipes';

  onNavigate(navbar: string) {
    this.loadedNavbar = navbar;
  }

  public ingredients: Ingredient[] = [
    new Ingredient('Large shallots', 6),
    new Ingredient('Garlic cloves', 5)
  ]
}
