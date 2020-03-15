import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { AuthComponent } from '../auth/components/auth/auth.component';
import { PageNotFoundComponent } from '../core/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    FilterComponent,
    AuthComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    HeaderComponent,
    SearchInputComponent,
    FilterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
