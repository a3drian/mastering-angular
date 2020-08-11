
import { Component } from '@angular/core';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html'
})

export class UsersComponent {
	username: String = '';
	allowButtonClick: boolean = false;

	checkValidUsername() {
		if (this.username === '') {
			this.allowButtonClick = true;
			return this.allowButtonClick;
		} else {
			this.allowButtonClick = false;
			return this.allowButtonClick;
		}
	}

	onButtonClick() {
		this.username = '';
	}
}