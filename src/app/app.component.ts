import { Component } from '@angular/core';
import { LanguageService } from './services/languages/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-web-landing-page';
  constructor(private _languageService: LanguageService) {}
}
