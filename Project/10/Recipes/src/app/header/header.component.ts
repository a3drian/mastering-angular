import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Output() clickedLink = new EventEmitter<String>();

	onClickedLink(link: String): void {
		console.log('header.component.ts');
		console.log('onClickedLink(link: String):');
		console.log(`link: ${link}`);
		this.clickedLink.emit(link);
	}

	constructor() { }

	ngOnInit(): void {
	}

}
