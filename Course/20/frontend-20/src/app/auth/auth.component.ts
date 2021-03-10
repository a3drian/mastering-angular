import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth-service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent {

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	isInLoginMode: boolean = true;
	isLoading: boolean = false;
	error: string = null;

	onSwitchMode() { this.isInLoginMode = !this.isInLoginMode; }

	onSubmit(form: NgForm) {
		console.log(form.value);

		if (!form.valid) {
			console.log(`Invalid form!`);
			return;
		}

		const email = form.value.email;
		const password = form.value.password;

		let authObs: Observable<AuthResponseData>;

		this.isLoading = true;

		if (this.isInLoginMode) {
			authObs = this.authService.signIn(email, password);
		} else {
			authObs = this.authService.signUp(email, password)
		}

		authObs
			.subscribe(
				(responseData) => {
					console.log('Response data for log in / sign up request:');
					console.log(responseData);
					this.isLoading = false;
					// navigation from inside the code, not from inside the template
					this.router.navigate(['/recipes']);
				},
				// we always throwError(errorMessage) in the service => we can simply display the message here
				(errorMessage) => {
					console.log('Error when trying to log in / sign up:');
					console.log(errorMessage);

					this.error = errorMessage;
					this.isLoading = false;
				}
			);

		form.reset();
	}

}
