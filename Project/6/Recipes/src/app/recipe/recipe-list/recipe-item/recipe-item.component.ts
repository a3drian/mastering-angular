import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
	selector: 'recipe-item',
	templateUrl: 'recipe-item.component.html'
})

export class RecipeItemComponent {

	@Output() clickedRecipe = new EventEmitter<void>();

	@Input() recipe: Recipe;

	onClickedRecipe() {
		console.log('recipe-item.component.ts');
		console.log(`this.recipe.name: ${this.recipe.name}`);
		this.clickedRecipe.emit();
	}
}