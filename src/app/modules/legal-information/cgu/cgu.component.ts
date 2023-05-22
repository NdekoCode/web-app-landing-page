import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentfulService } from './../../../services/contentful.service';

import { Entry } from 'contentful';
@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.scss'],
})
export class CguComponent {
  constructor(
    public translate: TranslateService,
    private contentFulService: ContentfulService
  ) {}
  data!: Entry;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.contentFulService
      .getTranslationPage('cgu')
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
