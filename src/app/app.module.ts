import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeModule } from './modules/home/home.module';
import { ShareModule } from './modules/share-module/share-module.module';
import { ChangeLogComponent } from './pages/change-log/change-log.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MoreAboutComponent } from './pages/more-about/more-about.component';
import { Page404Component } from './pages/page404/page404.component';
import { SafePipe } from './safe.pipe';
import { ScrollDirective } from './directives/scroll.directive';
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
    ContactComponent,
    ScrollDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ShareModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
