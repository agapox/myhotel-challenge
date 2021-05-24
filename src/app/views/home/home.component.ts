import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public pageCount = 0;
  public postPerPage = 10;
  public createPostStatus: 'create' | 'creating' | 'created' = 'create';
  public newPostForm: FormGroup | undefined;

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

  createPost() {
    console.log('create post');
    this.generateForm();
    console.log(this.newPostForm?.value)
  }

  creatingPost() {
    this.createPostStatus = 'creating';
    console.log(this.newPostForm)
    const post: Post = {
      title: this.newPostForm?.value.title,
      body: this.newPostForm?.value.body,
      userId: this.newPostForm?.value.userId
    }
    this.postService.createPost(post).subscribe(data => {
      const { id } = data;
      this.posts.unshift({ ...post, id });
      this.getCurrentPosts()
      console.log(data);
      this.createPostStatus = 'created';
    })
  }

  resetCreation() {
    this.createPostStatus = 'create';
  }

  generateForm() {
    this.newPostForm = new FormGroup({
      title: new FormControl(null),
      body: new FormControl(null),
      userId: new FormControl(1)
    });
  }

}
