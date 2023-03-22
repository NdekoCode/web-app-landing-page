import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { NotificationBarComponent } from './header/notification-bar/notification-bar.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { BlockVideoComponent } from './homepage/block-video/block-video.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TwoColumnComponent } from './homepage/two-column/two-column.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { SafePipe } from './safe.pipe';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature/feature.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
