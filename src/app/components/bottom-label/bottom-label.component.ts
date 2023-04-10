import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-label',
  templateUrl: './bottom-label.component.html',
  styleUrls: ['./bottom-label.component.scss'],
})
export class BottomLabelComponent {
  isShown: boolean = false;
  onToggleShow() {
    this.isShown = !this.isShown;
  }
  onShow(arg: Event | boolean) {
    this.onToggleShow();
  }
}
