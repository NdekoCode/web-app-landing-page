import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share-module/share-module.module';
import { CguComponent } from './cgu/cgu.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { LegalDateComponent } from './components/legal-date/legal-date.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { LegalInformationComponent } from './legal-information/legal-information.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RgpdTemplateComponent } from './rgpd-template/rgpd-template.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    RgpdTemplateComponent,
    RgpdComponent,
    CookiePolicyComponent,
    DownloadButtonComponent,
    LegalDateComponent,
    LegalInformationComponent,
    CguComponent,
    TermsComponent,
  ],
  imports: [CommonModule, ShareModule, RouterModule],
})
export class LegalInformationModule {}
