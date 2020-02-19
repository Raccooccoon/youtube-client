import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from './models/search-item.model';

@Pipe({
  name: 'sortByViews'
})
export class SortByViewsPipe implements PipeTransform {
  public transform(videos: ISearchItem[], flag: boolean): ISearchItem[] {
    if (flag) {
      const videosCopy: ISearchItem[] = videos.slice();
      return videosCopy.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
    } else {
      return videos;
    }
  }
}
