import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	// template: `
	// 		<app-server></app-server>
	// 		<app-server></app-server>
	// 		`,
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

	allowNewServer: boolean = true;
	serverCreationStatus: String = 'No server was created!';
	serverName: String = '';
	serverCreated: boolean = false;
	servers: String[] = ['PRAID-10', 'PRAID-V'];

	constructor() {
		setTimeout(() => {
			this.allowNewServer = false;
		}, 2000);
	}

	ngOnInit(): void {
	}

	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = `Server with name ${this.serverName} was created!`;
	}

	onUpdateServerName(event: Event) {
		console.log(event);
		this.serverName = (<HTMLInputElement>event.target).value;
		// console.log(event.data);
	}
}
