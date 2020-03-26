import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';
import { VideosFilterService } from '../../services/videos-filter.service';
import { SearchOfVideosService } from '../../services/search-of-videos.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public results: ISearchItem[];
  public showMoreFlag: boolean = false;

  constructor(
    public videoService: VideosFilterService,
    public searchVideo: SearchOfVideosService,
  ) {}

   public ngOnInit(): void {
    if (this.searchVideo.response$ !== undefined) {
      this.searchVideo.response$
        .pipe(
          mergeMap((data) => {
            return this.searchVideo.searchByID(data);
          })
        )
        .subscribe((response: ISearchResponse) => {
          this.searchVideo.videos = response.items;
          this.searchVideo.videos$.next(this.searchVideo.videos);
          this.showMoreFlag = true;
        });
    }
    if (this.searchVideo.videos.length > 0) {
      this.showMoreFlag = true;
    }
  }

  public loadMore(): void {
    if (this.videoService.sortByDate || this.videoService.sortByViews
      || Boolean(this.videoService.sortByKeyWord)) {
      return alert('Please, reset the filter.');
    }
    const keyword: string = this.searchVideo.keyWord;
    this.searchVideo.searchByKeyword(keyword)
      .pipe(
        mergeMap((data: string) => {
          return this.searchVideo.searchByID(data);
        })
      )
      .subscribe((response: ISearchResponse) => {
        const videosIDs: string[] = this.searchVideo.videos.map(video => video.id);
        response.items.forEach(item => {
          if (videosIDs.indexOf(item.id) === -1) {
            this.searchVideo.videos.push(item);
          }
        });
        this.searchVideo.videos$.next(this.searchVideo.videos);
      });
  }

  public filterBydateFlag(): (boolean | string) {
    return this.videoService.sortByDate;
  }

  public filterByViewsFlag(): (boolean | string) {
    return this.videoService.sortByViews;
  }

  public filterByValueFlag(): string {
    return this.videoService.sortByKeyWord;
  }
}
