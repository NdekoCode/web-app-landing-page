import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { navLinks } from 'src/app/utils/constants';
import { RouterLink } from 'src/app/utils/types';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  isClicked: boolean = false;
  topbarLinks: RouterLink[] = navLinks;
  defaultLanguage: string = 'fr';
  isSelected: boolean = false;

  onChangeNavButton() {
    if (window.innerWidth < 992) {
      this.isClicked = !this.isClicked;
    }
  }
  onSubmit(arg: NgForm) {}
  changeLanguage(e: Event, arg?: NgForm) {
    this.isSelected = !this.isSelected;
    arg?.onSubmit(e);
    console.log(this.defaultLanguage);
  }
}
