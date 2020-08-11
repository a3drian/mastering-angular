import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import {UsersComponent} from './users/users.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		WarningAlertComponent,
		SucessAlertComponent,
		UsersComponent,
		ProductDetailsComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
