import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByViews'
})
export class SortByViewsPipe implements PipeTransform {
  public transform(videos: ISearchItem[], flag: (boolean | string)): ISearchItem[] {
    if (flag === 'sort_down') {
      const videosCopy: ISearchItem[] = videos.slice();
      videos = videosCopy.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      return videos;
    }
    if (flag === 'sort_up') {
      const videosCopy: ISearchItem[] = videos.slice();
      videos = videosCopy.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
      return videos;
    } else {
      return videos;
    }
  }
}
