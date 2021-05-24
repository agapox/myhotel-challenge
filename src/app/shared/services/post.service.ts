import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL: string = 'https://jsonplaceholder.typicode.com/posts';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get(this.URL).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getPostById(id: number) {
    return this.httpClient.get(`${this.URL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.URL, post, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${this.URL}/${post.id}`, post, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePost(post: Post): Observable<any> {
    return this.httpClient.delete(`${this.URL}/${post.id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
