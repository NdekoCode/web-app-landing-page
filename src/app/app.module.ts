import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegalInformationModule } from './modules/legal-information/legal-information.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ScrollHideDirective } from './directives/scroll-hide.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { HomeModule } from './modules/home/home.module';
import { ShareModule } from './modules/share-module/share-module.module';
import { ChangeLogComponent } from './pages/change-log/change-log.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MoreAboutComponent } from './pages/more-about/more-about.component';
import { Page404Component } from './pages/page404/page404.component';
import { TrimContentPipe } from './pipes/trim-content.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    TopbarComponent,
    HeaderComponent,
    Page404Component,
    MoreAboutComponent,
    ChangeLogComponent,
    ScrollDirective,
    TrimContentPipe,
    ScrollTopComponent,
    ScrollHideDirective,
    LoaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    FormsModule,
    ShareModule,
    HomeModule,
    LegalInformationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
