import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// prime ng stuff
import { DataTableModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // font awesome
    AngularFontAwesomeModule,
    // prime ng data tables
    DataTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
