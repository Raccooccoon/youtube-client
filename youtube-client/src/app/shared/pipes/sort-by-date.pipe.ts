import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  public transform(videos: ISearchItem[], flag: (string | boolean)): ISearchItem[] {
    if (flag === 'sort_down') {
      const videosCopy: ISearchItem[] = videos.slice();
      return videosCopy.sort((a, b) => new Date(b.snippet.publishedAt).getTime()
      - new Date(a.snippet.publishedAt).getTime());
    }
    if (flag === 'sort_up') {
      const videosCopy: ISearchItem[] = videos.slice();
      return videosCopy.sort((a, b) => new Date(a.snippet.publishedAt).getTime()
      - new Date(b.snippet.publishedAt).getTime());
    } else {
      return videos;
    }
  }
}
