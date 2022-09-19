import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TDS_I18N, vi_VN } from 'tds-ui/i18n'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { DragDropModule } from '@angular/cdk/drag-drop';


// Đa ngôn ngữ
import localeVi from '@angular/common/locales/vi'; 
import { registerLocaleData } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Thiết lập tiếng Việt
registerLocaleData(localeVi); 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: [{ provide: TDS_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
