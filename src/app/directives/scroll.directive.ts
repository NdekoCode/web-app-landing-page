import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  @HostBinding('class.scroll-nav') scrollNav!: boolean;
  @HostListener('window:scroll') onScroll() {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
      this.scrollNav = true;
    } else {
      this.scrollNav = false;
    }
  }
}
