import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  editPostForm: FormGroup | undefined;
  isEditingPost: boolean = false;

  postId = 0;

  post: Post = {
    title: '',
    body: '',
    userId: 0
  }

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.postId = Number(data.id);
      this.getPostById(this.postId);

    })
  }

  generateForm(post: Post) {
    const { title, body, userId } = post;
    this.editPostForm = new FormGroup({
      title: new FormControl(title),
      body: new FormControl(body),
      userId: new FormControl({value: userId, disabled: true})
    });
  }

  getPostById(id: number) {
    this.postService.getPostById(id).subscribe((post: any) => {
      this.post = post;
      this.generateForm(post);
    });
  }

  toggleEditPost() {
    this.isEditingPost = !this.isEditingPost;
  }

  editPost(post: Post) {
    console.log('edit')
    this.toggleEditPost()

  }

  savePost(post: Post) {
    console.log('savePost')
    this.toggleEditPost();
    console.log(this.editPostForm);
  }

  deletePost(post: Post) {
    console.log('delete');
    this.postService.deletePost(post).subscribe(data => {
      if (data) {
        console.log('deleted')
        this.router.navigate(['../']);
      }
    })
  }

  goBack() {
    this.router.navigate(['../']);
  }

}
