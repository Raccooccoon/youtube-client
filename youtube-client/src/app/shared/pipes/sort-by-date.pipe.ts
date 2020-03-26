import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  public transform(videos: ISearchItem[], flag: (string | boolean)): ISearchItem[] {
    if (flag === 'sort_down') {
      const videosCopy: ISearchItem[] = videos.slice();
      videos = videosCopy.sort((a, b) => new Date(b.snippet.publishedAt).getTime()
      - new Date(a.snippet.publishedAt).getTime());
      return videos;
    }
    if (flag === 'sort_up') {
      const videosCopy: ISearchItem[] = videos.slice();
      videos = videosCopy.sort((a, b) => new Date(a.snippet.publishedAt).getTime()
      - new Date(b.snippet.publishedAt).getTime());
      return videos;
    } else {
      return videos;
    }
  }
}
