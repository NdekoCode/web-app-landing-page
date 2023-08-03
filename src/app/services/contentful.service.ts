import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private CONFIG = {
    space: environment.spaceId,
    accessToken: environment.accessToken,
    contentTypeIds: {
      translation: 'translation',
    },
  };
  public isLoading = true;
  private client = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken,
  });

  async getTranslationPage(query: string): Promise<Entry<any>> {
    const res = await this.client.getEntries(
      Object.assign({
        content_type: this.CONFIG.contentTypeIds.translation,
      })
    );
    this.isLoading = false;
    const data = res.items.filter(
      (item) => item.fields['pageTitle'] === query
    )[0];
    return data;
  }
}
