import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [
		new Ingredient('Fried eggs', 2),
		new Ingredient('Toast', 2)
	];

	constructor() { }

	ngOnInit(): void {
	}

	onAddedIngredient(ingredient: Ingredient) {
		console.log('shopping-list.component.ts');
		console.log(`ingredient: ${ingredient}`);
		this.ingredients.push(ingredient);
	}

}
