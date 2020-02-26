import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SortByWordPipe } from './pipes/sort-by-word.pipe';

@NgModule({
  declarations: [
    SortByDatePipe,
    SortByViewsPipe,
    SortByWordPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortByDatePipe,
    SortByViewsPipe,
    SortByWordPipe
  ]
})
export class SharedModule { }