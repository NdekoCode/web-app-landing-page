import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentfulService } from './../../../services/contentful.service';

import { Entry } from 'contentful';
@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss'],
})
export class CookiePolicyComponent {
  constructor(
    public translate: TranslateService,
    private contentFulService: ContentfulService
  ) {}
  data!: Entry;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.contentFulService
      .getTranslationPage('cookie-policy')
      .then((item) => {
        this.data = item;
        this.isLoading = this.contentFulService.isLoading;
      })
      .catch((err) => {
        this.isLoading = this.contentFulService.isLoading;
        console.error(err);
      });
  }
}
