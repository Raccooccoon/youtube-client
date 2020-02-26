import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from './models/search-item.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  public transform(videos: ISearchItem[], flag: boolean): ISearchItem[] {
    if (flag) {
      const videosCopy: ISearchItem[] = videos.slice();
      return videosCopy.sort((a, b) => new Date(b.snippet.publishedAt).getTime()
      - new Date(a.snippet.publishedAt).getTime());
    } else {
      return videos;
    }
  }
}
