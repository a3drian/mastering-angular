import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	odds: number[] = [];
	evens: number[] = [];
	numbers: number[] = [];

	constructor() {
		this.evens = new Array;
		this.odds = new Array;
		this.numbers = new Array;
	}

	onIntervalIncrease(value: number) {
		console.log('onIntervalIncrease(value: number):')
		console.log(`value: ${value}`);

		if (value % 2 === 0) {
			console.log('EVEN');
			this.evens.push(value);
		} else {
			console.log('ODD');
			this.odds.push(value);
		}

		this.numbers.push(value);

	}

}
