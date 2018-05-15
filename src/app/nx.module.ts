import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NxComponent} from './nx.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// font awesome
import {AngularFontAwesomeModule} from 'angular-font-awesome';

// prime ng stuff
import {DataTableModule} from 'primeng/primeng';

// own components
import {NxNewsTableComponent} from './components/newstable/nx.newstable.component';


@NgModule({
  declarations: [
    NxComponent,
    NxNewsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // font awesome
    AngularFontAwesomeModule,
    // prime ng data tables
    DataTableModule
  ],
  providers: [],
  bootstrap: [NxComponent, NxNewsTableComponent]
})
export class NxModule {
}
