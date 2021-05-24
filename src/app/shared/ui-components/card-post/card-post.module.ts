import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostComponent } from './card-post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardPostComponent]
})
export class CardPostModule { }
