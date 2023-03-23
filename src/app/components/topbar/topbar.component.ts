import { Component } from '@angular/core';
import { navLinks, RouterLink } from 'src/app/utils/constants';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  isClicked: boolean = false;
  topbarLinks: RouterLink[] = navLinks;

  onChangeNavButton() {
    if (window.innerWidth < 992) {
      this.isClicked = !this.isClicked;
    }
  }
}
