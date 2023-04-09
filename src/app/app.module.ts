import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { ShareModule } from './modules/share-module/share-module.module';
import { ChangeLogComponent } from './pages/change-log/change-log.component';
import { FeaturesComponent } from './pages/features/features.component';
import { MoreAboutComponent } from './pages/more-about/more-about.component';
import { Page404Component } from './pages/page404/page404.component';
import { SafePipe } from './safe.pipe';
import { TrimContentPipe } from './pipes/trim-content.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    TopbarComponent,
    HeaderComponent,
    SafePipe,
    Page404Component,
    MoreAboutComponent,
    ChangeLogComponent,
    ScrollDirective,
    FeaturesComponent,
    TrimContentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    ShareModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
