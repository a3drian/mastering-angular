import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

	// constructor(private counterService: CounterService) { }

	activeUsers: String[] = ['Ann', 'Lisa'];
	inactiveUsers: String[] = ['Steve', 'Jessica'];

	setToActive(id: number) {
		const aux = this.inactiveUsers[id];
		this.inactiveUsers.splice(id, 1);
		this.activeUsers.push(aux);
		// this.counterService.incrementInactiveToActive();
	}

	setToInactive(id: number) {
		const aux = this.activeUsers[id];
		this.activeUsers.splice(id, 1);
		this.inactiveUsers.push(aux);
		// this.counterService.incrementActiveToInactive();
	}
}