import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByWord'
})
export class SortByWordPipe implements PipeTransform {
  public transform(videos: ISearchItem[], value: string): ISearchItem[] {
    if (Boolean(value)) {
      const videosCopy: ISearchItem[] = videos.slice();
      const  valueInLowerCase: string = value.toLowerCase();
      return videosCopy.filter(video => video.snippet.title.toLowerCase().includes(valueInLowerCase));
    } else {
      return videos;
    }
  }
}
