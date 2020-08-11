import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	@Output() intervalStarted = new EventEmitter<number>();

	interval;
	value: number = 0;

	onStartedInterval() {
		this.interval = setInterval(() => {
			console.log('onStartedInterval():');
			console.log(`this.value = ${this.value}`);
			this.intervalStarted.emit(this.value + 1);
			this.value++;
		}, 1000);
	}

	onStoppedInterval() {
		console.log('onStoppedInterval():')
		clearInterval(this.interval);
	}

	onResetInterval() {
		this.value = 0;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
