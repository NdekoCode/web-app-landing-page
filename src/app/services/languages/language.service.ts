import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private keyLanguage: string = 'userLanguage';
  private _userLanguage: string = '';
  private supportedLanguage = ['fr', 'en'];
  constructor(private translate: TranslateService) {
    this.initLanguage();
    this.translate.use(this._userLanguage);
  }
  initLanguage() {
    const value = localStorage.getItem(this.keyLanguage);
    if (value) {
      this._userLanguage = value;
    } else {
      // On part chercher la langue du navigateur
      const browserLanguage = navigator.language.split('-')[0]; // en-GB, fr-FR
      // On va verifier si on supporte cette langue et si on ne la supporte pas il faut que l'on retombe sur une langue par defaut par exemple l'anglais
      this._userLanguage = 'en';

      if (this.supportedLanguage.includes(browserLanguage)) {
        this._userLanguage = browserLanguage;
        localStorage.setItem(this.keyLanguage, browserLanguage);
      }
    }
    console.log(this._userLanguage);
  }

  setLanguage(language: string): void {
    console.log(language);
    if (this.supportedLanguage.includes(language)) {
      this._userLanguage = language;
      localStorage.setItem(this.keyLanguage, this._userLanguage);
      this.translate.use(this._userLanguage);
    } else {
      this.initLanguage();
      this.translate.use(this._userLanguage);
    }
  }
  get userLanguage() {
    return this._userLanguage;
  }
  getAvailableLanguages() {
    return this.supportedLanguage;
  }
  getTranslate(): TranslateService {
    return this.translate;
  }
}
