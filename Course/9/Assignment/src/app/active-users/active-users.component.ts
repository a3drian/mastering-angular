import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
	users: String[];

	constructor(private userService: UserService,
		private counterService: CounterService) { }

	ngOnInit() {
		this.users = this.userService.activeUsers;
	}

	onSetToInactive(id: number) {
		this.userService.setToInactive(id);
		this.counterService.incrementActiveToInactive();
	}
}
