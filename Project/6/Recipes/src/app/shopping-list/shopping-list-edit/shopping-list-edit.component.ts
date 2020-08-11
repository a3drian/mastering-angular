import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

	@ViewChild('nameInput', { static: true }) ingredientName: ElementRef;
	@ViewChild('amountInput', { static: true }) ingredientAmount: ElementRef;

	@Output() ingredientAdded = new EventEmitter<Ingredient>();

	constructor() { }

	ngOnInit() { }

	onPressAdd() {
		console.log(this.ingredientName.nativeElement.value);
		console.log(this.ingredientAmount.nativeElement.value);
		const name = this.ingredientName.nativeElement.value;
		const amount = this.ingredientAmount.nativeElement.value;
		this.ingredientAdded.emit(new Ingredient(name, amount));
	}

	onPressClear() {

	}

}
