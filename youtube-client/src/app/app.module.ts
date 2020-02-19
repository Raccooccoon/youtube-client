
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { SortByWordPipe } from './sort-by-word.pipe';
import { SortByViewsPipe } from './sort-by-views.pipe';
import { SortByDatePipe } from './sort-by-date.pipe';
import { BorderHighLightDirective } from './components/search-item/border-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchInputComponent,
    FilterComponent,
    AuthComponent,
    SortByWordPipe,
    SortByViewsPipe,
    SortByDatePipe,
    BorderHighLightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
