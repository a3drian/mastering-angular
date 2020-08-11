import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

	@Output() addedServer = new EventEmitter<{ serverName: String, serverContent: String }>();
	@Output('bpCreated') addedBlueprint = new EventEmitter<{ serverName: String, serverContent: String }>();

	// newServerName = '';
	// newServerContent = '';
	// we will use @ViewChild instead:
	@ViewChild('blueprintNameInput', { static: true }) serverContentInput: ElementRef;

	onAddServer(nameInput: HTMLInputElement) {
		this.addedServer.emit({
			// serverName: this.newServerName,
			serverName: nameInput.value,
			// serverContent: this.newServerContent
			serverContent: this.serverContentInput.nativeElement.value
		})
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.addedBlueprint.emit({
			// serverName: this.newServerName,
			serverName: nameInput.value,
			// serverContent: this.newServerContent
			serverContent: this.serverContentInput.nativeElement.value
		})
	}

	constructor() { }

	ngOnInit(): void {
	}

}
