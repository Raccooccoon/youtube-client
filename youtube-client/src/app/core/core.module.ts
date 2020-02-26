import { YoutubeModule } from './../youtube/youtube.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    YoutubeModule,
  ],
  exports: [
    HeaderComponent,
    SearchInputComponent,
    FilterComponent,
  ]
})
export class CoreModule { }
