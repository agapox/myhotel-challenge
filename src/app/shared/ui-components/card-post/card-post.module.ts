import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostComponent } from './card-post.component';



@NgModule({
  declarations: [
    CardPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardPostComponent]
})
export class CardPostModule { }
