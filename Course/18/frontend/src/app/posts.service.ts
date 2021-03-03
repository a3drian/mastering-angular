import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {

    error = new Subject<string>();

    baseURL = 'https://making-http-requests-a2150-default-rtdb.europe-west1.firebasedatabase.app/';

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        console.log(postData);
        this.http
            .post<{ name: String }>(
                `${this.baseURL + 'posts.json'}`,
                postData
            )
            .subscribe(
                responseData => {
                    console.log(responseData);
                },
                error => {
                    this.error.next(error.message);
                }
            );
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }>(`${this.baseURL + 'posts.json'}`)
            .pipe(
                // map((responseData: { [key: string]: Post }) => { // because we put <{ [key: string]: Post }>
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                }),
                catchError(errorResponse => {
                    // Send to analytics server
                    return throwError(errorResponse);
                })
            );
        // now we are subscribing in the "app.component"
        // .subscribe(
        //     posts => {
        //         console.log(posts);
        //     }
        // );
    }

    deletePosts() {
        return this.http
            .delete(`${this.baseURL + 'posts.json'}`);

    }
}