import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  isClicked: boolean = false;
  onChangeNavButton() {
    if (window.innerWidth < 992) {
      this.isClicked = !this.isClicked;
    }
  }
}
