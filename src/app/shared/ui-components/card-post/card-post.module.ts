import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostComponent } from './card-post.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';



@NgModule({
  declarations: [
    CardPostComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardPostComponent, HighlightDirective]
})
export class CardPostModule { }
