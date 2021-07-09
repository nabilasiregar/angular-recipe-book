import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  // or using @ViewChild('ingredientNameInput) nameInputRef: ElementRef;

  onAddButton(ingredientNameInput: HTMLInputElement, ingredientAmountInput: HTMLInputElement) {
    this.ingredientCreated.emit({
      name: ingredientNameInput.value,
      amount: parseInt(ingredientAmountInput.value, 10)
    });
  }
}
