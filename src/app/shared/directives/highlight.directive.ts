import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() colorHighLight: string = "#000";

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightlight(this.colorHighLight);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightlight(null);
  }

  hightlight(color: string | null) {
    this.el.nativeElement.style.borderColor = color;
  }

}
