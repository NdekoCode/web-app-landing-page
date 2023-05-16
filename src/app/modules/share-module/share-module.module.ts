import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [FooterComponent, TranslateModule],
})
export class ShareModule {}
