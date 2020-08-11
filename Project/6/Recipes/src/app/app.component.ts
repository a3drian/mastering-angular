import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Recipes';

	clickedLink: String = 'recipe';

	onSelectedLink(link: String): void {
		console.log('app.component.ts');
		console.log('onSelectedLink(link: String):');
		console.log(`link: ${link}`);

		this.clickedLink = link;
	}

}
