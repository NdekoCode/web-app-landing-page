import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlockVideoComponent } from './components/block-video/block-video.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TwoColumnComponent } from './components/two-column/two-column.component';
import { ChangeLogComponent } from './pages/change-log/change-log.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoreAboutComponent } from './pages/more-about/more-about.component';
import { Page404Component } from './pages/page404/page404.component';
import { SafePipe } from './safe.pipe';
import { FaqComponent } from './components/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    TopbarComponent,
    HeaderComponent,
    BannerComponent,
    HomepageComponent,
    TwoColumnComponent,
    BlockVideoComponent,
    ModalVideoComponent,
    SafePipe,
    FeaturesComponent,
    FeatureComponent,
    Page404Component,
    MoreAboutComponent,
    ChangeLogComponent,
    ContactComponent,
    TestimonialsComponent,
    TestimonialComponent,
    FaqComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
