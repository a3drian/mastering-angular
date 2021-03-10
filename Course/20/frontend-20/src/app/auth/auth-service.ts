import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { User } from './user.model';

// response data from Firebase after sign up request
export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

	// user = new Subject<User>();
	user = new BehaviorSubject<User>(null);

	private readonly USER_DATA_KEY = 'userData';
	private tokenExpirationTimer: any;

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	signUp(email: string, password: string) {
		// sends request to Firebase required endpoint for signing users up
		return this.http
			.post<AuthResponseData>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_le8NweVrBpqTeTnx9NPymvQzLiPbUuU',
				{
					'email': email,
					'password': password,
					'returnSecureToken': true
				}
			)
			.pipe(
				catchError(
					(errorResponse) => {
						return this.handleError(errorResponse);
					}
				),
				tap(
					(responseData) => {
						return this.handleAuthentication(responseData);
					}
				)
			);
	}

	signIn(email: string, password: string) {
		// same POST request, different endpoint
		return this.http
			.post<AuthResponseData>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_le8NweVrBpqTeTnx9NPymvQzLiPbUuU',
				{
					'email': email,
					'password': password,
					'returnSecureToken': true
				}
			)
			.pipe(
				catchError(this.handleError),
				tap(
					(responseData) => {
						return this.handleAuthentication(responseData);
					}
				)
			);
	}

	logout() {
		this.user.next(null);
		localStorage.removeItem(this.USER_DATA_KEY);
		if (this.tokenExpirationTimer) {
			clearTimeout(this.tokenExpirationTimer);
		}
		this.tokenExpirationTimer = null;
		this.router.navigate(['/auth']);
	}

	autoLogin() {

		console.log('Called autoLogin()');

		const userData: {
			email: string;
			id: string;
			_token: string;
			_tokenExpirationDate: string
		} = JSON.parse(localStorage.getItem(this.USER_DATA_KEY));

		if (!userData) {
			return;
		}

		const loadedUser = new User(
			userData.email,
			userData.id,
			userData._token,
			new Date(userData._tokenExpirationDate)
		);

		if (!loadedUser.token) {
			return;
		}

		this.user.next(loadedUser);

		const remainingTokenTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
		this.autoLogout(remainingTokenTime);
	}

	autoLogout(expirationDuration: number) {
		// amount of ms before token is invalid
		console.log(`expirationDuration: ${expirationDuration}`);
		this.tokenExpirationTimer = setTimeout(
			() => { this.logout() },
			expirationDuration
		);
	}

	private handleError(errorResponse: HttpErrorResponse) {
		let errorMessage = 'An unknown error occurred!';
		// in case there is a network error and not Firebase error
		if (!errorResponse.error || !errorResponse.error.error) {
			return throwError(errorMessage);
		}
		const message = errorResponse.error.error.message;
		switch (message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'E-mail already exists!';
				break;
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'E-mail not found!';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'Password is incorrect!';
				break;
		}
		return throwError(errorMessage);
	}

	private handleAuthentication(responseData) {
		// + + because we need to convert responseData.expiresIn to a number
		const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
		const user = new User(
			responseData.email,
			responseData.localId,
			responseData.idToken,
			expirationDate
		);
		this.user.next(user);
		this.autoLogout(responseData.expiresIn * 1000);
		localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(user));
	}
}