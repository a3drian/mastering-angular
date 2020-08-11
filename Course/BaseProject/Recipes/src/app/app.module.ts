import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		// NgModel,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
