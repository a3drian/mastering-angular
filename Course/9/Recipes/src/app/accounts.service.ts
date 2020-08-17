import { Output, EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
	accounts: any[] = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Testaccount',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];

	@Output() statusUpdated = new EventEmitter<String>();

	addAccount(name: String, status: String) {
		this.accounts.push({ name, status });
	}

	updateStatus(id: number, status: String) {
		this.accounts[id].status = status;
	}

}