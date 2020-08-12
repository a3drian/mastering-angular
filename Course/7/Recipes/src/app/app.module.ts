import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BasicHighlighterDirective } from './basic-highlighter/basic-highlighter.directive';

import { AppComponent } from './app.component';
import { BetterHighlighterDirective } from './better-highlighter/better-highlighter.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
	declarations: [
		AppComponent,
		BasicHighlighterDirective,
		BetterHighlighterDirective,
		UnlessDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
