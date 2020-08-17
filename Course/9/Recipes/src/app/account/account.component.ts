import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css'],
	providers: [LoggingService]
})

export class AccountComponent {

	@Input() account: { name: string, status: string };
	@Input() id: number;

	click: String = 'This String is coming from account.component.ts';

	// no longer needed because we use the AccountsService
	// @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

	constructor(private loggingSerivce: LoggingService,
		private accountsService: AccountsService) { }

	onSetTo(status: string) {
		// no longer needed because we use the AccountsService
		// this.statusChanged.emit({ id: this.id, newStatus: status });
		// console.log('A server status changed, new status: ' + status);
		this.loggingSerivce.logStatusChange(status);
		this.accountsService.updateStatus(this.id, status);
		this.accountsService.statusUpdated.emit(
			this.click
		);
	}
}
