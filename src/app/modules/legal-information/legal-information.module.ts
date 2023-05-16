import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share-module/share-module.module';
import { RgpdTemplateComponent } from './components/rgpd-template/rgpd-template.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';

@NgModule({
  declarations: [PrivacyPolicyComponent, RgpdTemplateComponent, RgpdComponent, CookiePolicyComponent],
  imports: [CommonModule, ShareModule, RouterModule],
})
export class LegalInformationModule {}
