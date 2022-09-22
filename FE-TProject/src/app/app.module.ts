import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TDS_I18N, vi_VN } from 'tds-ui/i18n'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { DragDropModule } from '@angular/cdk/drag-drop';

// Đa ngôn ngữ
import localeVi from '@angular/common/locales/vi'; 
import { CommonModule, registerLocaleData } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { BodyFirstComponent } from './main-body/body-first/body-first.component';
import { CarouselModule } from 'ngx-acuw';
import { IntroCompanyComponent } from './intro-company/intro-company.component';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';
// Thiết lập tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBodyComponent,
    BodyFirstComponent,
    IntroCompanyComponent,
    HappyBirthdayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,
    CarouselModule,
    CommonModule
  ],
  providers: [{ provide: TDS_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
