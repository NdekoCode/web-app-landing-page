import { Component } from '@angular/core';
import { LanguageService } from './services/languages/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CRM-Site';
  constructor(private _languageService: LanguageService) {}
}
