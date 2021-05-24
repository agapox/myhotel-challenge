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
  public isPrevDisabled: boolean = false;
  public isNextDisabled: boolean = false;
  private pageCount = 0;
  private postPerPage = 10;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts().subscribe((posts: any) => {
      this.posts = posts;
      this.getCurrentPosts();
    })
  }

  private getPosts() {
    return this.postService.getPosts();
  }

  getCurrentPosts() {
    this.currentPosts = this.posts.slice(this.pageCount*this.postPerPage, this.pageCount*this.postPerPage + this.postPerPage);
    this.disabledBtns();
  }

  disabledBtns() {
    if (this.pageCount === 0) {
      this.isPrevDisabled = true;
    } else if (this.pageCount >= (this.posts.length/this.postPerPage) - 1) {
      this.isNextDisabled = true;
    } else {
      this.isPrevDisabled = false;
      this.isNextDisabled = false;
    }
  }

  getPrevPosts() {
    console.log('prev clicked');
    this.pageCount--;
    this.getCurrentPosts();
  }

  getNextPosts() {
    console.log('next clicked');
    this.pageCount++;
    this.getCurrentPosts();
  }

}
