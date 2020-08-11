import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'recipe-list',
	templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent {
	recipes: Recipe[] = [
		new Recipe('English breakfast',
			'Classic English breakfast',
			'https://food-images.files.bbci.co.uk/food/recipes/stressfreefullenglis_67721_16x9.jpg'),
		new Recipe('Lava cake',
			'Molten chocolate cake',
			'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chocolate_volcanoes_37330_16x9.jpg'),
		new Recipe('Carbonara',
			'Authentic spaghetti carbonara',
			'https://food-images.files.bbci.co.uk/food/recipes/spaghettiallacarbona_86763_16x9.jpg')
	];

	@Output() selectedRecipe = new EventEmitter<Recipe>();

	onSelectedRecipe(recipe: Recipe) {
		console.log('recipe-list.component.ts');
		this.selectedRecipe.emit(recipe);
	}
}