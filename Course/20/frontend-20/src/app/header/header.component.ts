import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth-service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

	private userSubscription: Subscription;
	isAuthenticated: boolean = false;

	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService
	) { }

	ngOnInit(): void {
		this.userSubscription = this.authService.user
			.subscribe(
				(user) => {
					// "user" is either "null" if not logged in
					// or "!null" if the "user" is an actual concrete object aka. is logged in
					if (user) {
						this.isAuthenticated = true;
					}
					// can be written as:
					// this.isAuthenticated = !!user;
				}
			);
	}

	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}

	onSaveData() {
		this.dataStorageService.storeRecipes();
	}

	onFetchData() {
		this.dataStorageService.fetchRecipes().subscribe();
	}
}
