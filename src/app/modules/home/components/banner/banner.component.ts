import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  isShown: boolean = false;
  videoUrl: string = 'https://www.youtube.com/embed/jHzIGGU-Ph0';
  onToggleShow() {
    this.isShown = !this.isShown;
  }
  onShow(arg: Event | boolean) {
    this.onToggleShow();
  }
}
