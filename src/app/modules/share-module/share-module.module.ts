import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [FooterComponent, TranslateModule],
})
export class ShareModule {}
