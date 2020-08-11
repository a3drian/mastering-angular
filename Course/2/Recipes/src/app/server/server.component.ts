import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
	.online{
		color:white;
	}
	`]
})

export class ServerComponent {
	name: String = 'PRAID-14';
	status: String = '';

	constructor() {
		this.status = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getColor(): String {
		if (this.status === 'online') {
			return 'lightseagreen';
		} else {
			return 'lightcoral';
		}
	}

	getServerStatus(): String {
		return this.status;
	}
}