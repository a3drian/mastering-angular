import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipe',
	templateUrl: 'recipe.component.html'
})

export class RecipeComponent {

	selectedRecipe: Recipe;

	onSelectedRecipe(recipe: Recipe) {
		console.log('recipe.component.ts');
		console.log(`recipe: ${recipe}`);
		this.selectedRecipe = recipe;
	}

	checkIfSelected(): boolean {
		// console.log('recipe.component.ts');
		// console.log('checkIfSelected():');
		if (this.selectedRecipe) {
			return true;
		} else {
			return false;
		}
	}
}