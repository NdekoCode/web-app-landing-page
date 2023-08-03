import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollHide]',
})
export class ScrollHideDirective {
  constructor() {}

  @HostBinding('class.scroll-hide') scrolHide!: boolean;
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 50) {
      this.scrolHide = true;
    } else {
      this.scrolHide = false;
    }
  }
}
