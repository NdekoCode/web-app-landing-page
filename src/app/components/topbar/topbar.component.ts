import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguageService } from 'src/app/services/languages/language.service';
import { navLinks } from 'src/app/utils/constants';
import { RouterLink } from 'src/app/utils/types';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isClicked: boolean = false;
  topbarLinks: RouterLink[] = navLinks;
  defaultLanguage!: string;
  isSelected: boolean = false;
  supportedLanguage!: string[];
  constructor(private _languageService: LanguageService) {}
  onChangeNavButton() {
    if (window.innerWidth < 992) {
      this.isClicked = !this.isClicked;
    }
    console.log(this.supportedLanguage);
  }
  ngOnInit() {
    this.defaultLanguage = this._languageService.userLanguage;
    this.supportedLanguage = this._languageService.getAvailableLanguages();
  }
  onSubmit(arg: NgForm) {}
  changeLanguage(e: Event, arg?: NgForm) {
    const target = e.target as HTMLSelectElement;
    this.isSelected = !this.isSelected;
    this._languageService.setLanguage(target.value);
    this.onSubmit(arg as NgForm);
  }
  navigateToSection(e: Event) {
    e.preventDefault();
  }
}
