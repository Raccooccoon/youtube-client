import { Injectable } from '@angular/core';
import  Response from '../../../response.json';
import { ISearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videos: ISearchItem[];
  public sortByDate: boolean = false;
  public sortByViews: boolean = false;
  public sortByKeyWord: string = '';
  public flagsForPipe: (boolean | string)[] = [this.sortByDate, this.sortByViews, ''];

  constructor() {}

  public getVideo(id: string): ISearchItem {
    this.videos = Response.items;
    const searchedVideo: ISearchItem[] = this.videos.filter(video => video.id === id);
    return searchedVideo[0];
  }

  public sortByDateFilter(): void {
    this.sortByDate = !this.sortByDate;
    this.flagsForPipe[0] = this.sortByDate;
  }

  public sortByViewsFilter(): void {
    this.sortByViews = !this.sortByViews;
    this.flagsForPipe[1] = this.sortByViews;
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
