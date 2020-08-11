import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	buttonClicked: boolean = false;
	clicks: number = 0;
	clicksArray: number[];
	datesArray: Date[];
	onButtonClick() {
		this.buttonClicked = !this.buttonClicked;
		this.clicks += 1;
		this.clicksArray.push(this.clicksArray.length + 1);
		console.log(this.clicksArray);
		this.datesArray.push(new Date());
		return this.buttonClicked;
	}

	getColour(){
		if(this.checkNumberOfClicks()){
			return 'lightskyblue';
		} else {
			return 'white';
		}
	}

	checkNumberOfClicks() {
		return this.clicks > 5;
	}

	constructor() {
		this.clicksArray = new Array;
		this.datesArray = new Array;
	}

	ngOnInit(): void {
	}

}
