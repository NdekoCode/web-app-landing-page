import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
import { ContentfulService } from './../../../services/contentful.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private contentFulService: ContentfulService
  ) {}
  data!: Entry;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.contentFulService
      .getTranslationPage('Terms')
      .then((item) => {
        this.data = item;
        this.isLoading = this.contentFulService.isLoading;
      })
      .catch((err) => {
        this.isLoading = this.contentFulService.isLoading;
      });
  }
}
