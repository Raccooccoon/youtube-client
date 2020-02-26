import { Component } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public videos: ISearchItem[];

  constructor(public videoService: VideoService) { }

  public getData(data: ISearchResponse): void {
    this.videos = data.items;
  }

  public filterBydateFlag(): boolean {
    return this.videoService.sortByDate;
  }

  public filterByViewsFlag(): boolean {
    return this.videoService.sortByViews;
  }

  public filterByValueFlag(): string {
    return this.videoService.sortByKeyWord;
  }
}
