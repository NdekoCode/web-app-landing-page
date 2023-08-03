import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  isShown: boolean = false;
  onToggleShow() {
    this.isShown = !this.isShown;
  }
  onShow(arg: Event | boolean) {
    this.onToggleShow();
  }
}
