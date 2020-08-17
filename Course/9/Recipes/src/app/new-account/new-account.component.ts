import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
	providers: [LoggingService]
})

export class NewAccountComponent {

	// no longer needed because we use the AccountsService
	// @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

	constructor(private loggingSerivce: LoggingService,
		private accountsService: AccountsService) {
		this.accountsService.statusUpdated.subscribe(
			(status: String) => console.log(`New status ${status}.`)
		);
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		// no longer needed because we use the AccountsService
		// this.accountAdded.emit({
		// 	name: accountName,
		// 	status: accountStatus
		// });
		// console.log('A server status changed, new status: ' + accountStatus);
		this.loggingSerivce.logStatusChange(accountStatus);
		this.accountsService.addAccount(accountName, accountStatus);
	}
}
