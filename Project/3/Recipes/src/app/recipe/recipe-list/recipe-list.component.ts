import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'recipe-list',
	templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent {
	recipes: Recipe[] = [
		new Recipe('English breakfast',
			'Classic English breakfast',
			'https://food-images.files.bbci.co.uk/food/recipes/stressfreefullenglis_67721_16x9.jpg')
	];
}