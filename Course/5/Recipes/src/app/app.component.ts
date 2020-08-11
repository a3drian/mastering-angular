import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	serverElements = [{
		type: 'server',
		name: 'PRAID-10',
		content: 'This server is not running.'
	},
	{
		type: 'server',
		name: 'PRAID-V',
		content: 'This server is not running.'
	}
	];

	onAddedServer(serverData: { serverName: string, serverContent: string }) {
		this.serverElements.push({
			type: 'server',
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onAddedBlueprint(blueprintData: { serverName: string, serverContent: string }) {
		this.serverElements.push({
			type: 'blueprint',
			name: blueprintData.serverName,
			content: blueprintData.serverContent
		});
	}

	onChangeFirst() {
		this.serverElements[0].name = 'Changed!';
	}

	onDestroyFirst() {
		this.serverElements.splice(0, 1);
	}

}
