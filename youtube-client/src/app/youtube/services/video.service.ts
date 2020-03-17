import { Injectable } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videos: ISearchItem[];
  public sortByDate: (boolean | string) = false;
  public sortByViews: (boolean | string) = false;
  public sortByKeyWord: string = '';
  public flagsForPipe: (boolean | string)[] = [this.sortByDate, this.sortByViews, ''];

  constructor(public serviceRouter: Router) {}

  public sortByDateFilter(): (boolean | string) {
    if (this.sortByDate === false) {
      this.sortByDate = 'sort_up';
    } else if (this.sortByDate === 'sort_up') {
      this.sortByDate = 'sort_down';
    } else if (this.sortByDate === 'sort_down') {
      this.sortByDate = false;
    }
    this.flagsForPipe[0] = this.sortByDate;
    return this.sortByDate;
  }

  public sortByViewsFilter(): (boolean | string) {
    if (this.sortByViews === false) {
      this.sortByViews = 'sort_up';
    } else if (this.sortByViews === 'sort_up') {
      this.sortByViews = 'sort_down';
    } else if (this.sortByViews === 'sort_down') {
      this.sortByViews = false;
    }
    this.flagsForPipe[1] = this.sortByViews;
    return this.sortByViews;
  }

  public sortByKeyWordFilter(): void {
    if (Boolean(this.sortByKeyWord) === true) {
      this.flagsForPipe[2] = inLowerCase(this.sortByKeyWord);
    } else if (Boolean(this.sortByKeyWord) === false) {
      this.flagsForPipe[2] = '';
    }

    function inLowerCase (str: string): string {
      return str.toLowerCase();
    }
  }
}
