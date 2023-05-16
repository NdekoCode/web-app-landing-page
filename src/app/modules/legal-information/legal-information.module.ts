import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share-module/share-module.module';
import { RgpdTemplateComponent } from './components/rgpd-template/rgpd-template.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { SidebarLinksComponent } from './components/sidebar-links/sidebar-links.component';
import { LegalDateComponent } from './components/legal-date/legal-date.component';
import { LegalInformationComponent } from './legal-information/legal-information.component';
import { SubcontractorsComponent } from './subcontractors/subcontractors.component';
import { CguComponent } from './cgu/cgu.component';

@NgModule({
  declarations: [PrivacyPolicyComponent, RgpdTemplateComponent, RgpdComponent, CookiePolicyComponent, DownloadButtonComponent, SidebarLinksComponent, LegalDateComponent, LegalInformationComponent, SubcontractorsComponent, CguComponent],
  imports: [CommonModule, ShareModule, RouterModule],
})
export class LegalInformationModule {}
