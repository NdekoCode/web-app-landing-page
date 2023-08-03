import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SpinnerComponent } from './../../components/spinner/spinner.component';

@NgModule({
  declarations: [FooterComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [FooterComponent, TranslateModule, SpinnerComponent],
})
export class ShareModule {}
