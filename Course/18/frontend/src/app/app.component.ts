import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  private errorSubscription: Subscription;

  baseURL = 'https://making-http-requests-a2150-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage;
      }
    )

    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService
      .fetchPosts()
      .subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        error => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error.response);
        }
      );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService
      .deletePosts()
      .subscribe(
        () => {
          this.loadedPosts = [];
        }
      );
  }

  onHandleError() {
    this.error = null;
  }
}
