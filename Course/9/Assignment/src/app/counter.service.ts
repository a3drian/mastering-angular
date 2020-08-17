import { Injectable, HostListener } from '@angular/core';

@Injectable()
export class CounterService {
	activeToInactive: number = 0;
	inactiveToActive: number = 0;

	incrementActiveToInactive() {
		this.activeToInactive++;
		console.log(`activeToInactive: ${this.activeToInactive}`)
	}

	incrementInactiveToActive() {
		this.inactiveToActive++;
		console.log(`inactiveToActive: ${this.inactiveToActive}`)
	}

}