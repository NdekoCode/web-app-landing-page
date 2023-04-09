import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareModule } from './../share-module/share-module.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FormsModule, ShareModule],
})
export class ContactModule {}
