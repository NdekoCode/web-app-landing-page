import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockVideoComponent } from 'src/app/components/block-video/block-video.component';
import { BottomLabelComponent } from 'src/app/components/bottom-label/bottom-label.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { ModalVideoComponent } from 'src/app/components/modal-video/modal-video.component';
import { TwoColumnComponent } from 'src/app/components/two-column/two-column.component';
import { ShareModule } from '../share-module/share-module.module';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    BannerComponent,
    FeaturesComponent,
    FeatureComponent,
    TestimonialsComponent,
    TestimonialComponent,
    HomepageComponent,
    TwoColumnComponent,
    BlockVideoComponent,
    ModalVideoComponent,
    FaqComponent,
    BottomLabelComponent,
  ],
  imports: [CommonModule, ShareModule],
})
export class HomeModule {}
