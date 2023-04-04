import { Component } from '@angular/core';

@Component({
  selector: 'app-block-video',
  templateUrl: './block-video.component.html',
  styleUrls: ['./block-video.component.scss'],
})
export class BlockVideoComponent {
  isShown: boolean = false;
  onToggleShow() {
    this.isShown = !this.isShown;
  }
  onShow(arg: Event | boolean) {
    this.onToggleShow();
  }
}
