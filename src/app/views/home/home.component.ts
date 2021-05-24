import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Array<Post> = [];
  public currentPosts: Array<Post> = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts().subscribe((posts: any) => {
      this.posts = posts;
      this.getCurrentPosts(this.posts.slice(0, 10));
    })
  }

  getPosts() {
    return this.postService.getPosts();
  }

  getCurrentPosts(posts: Array<Post>) {
    this.currentPosts = posts;
  }

  getPrevPosts() {

  }

  getNextPosts() {

  }

}
