import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';
import { VideoService } from '../../services/video.service';
import { Router } from '@angular/router';
import { SearchOfVideosService } from '../../../core/services/search-of-videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public results: ISearchItem[];
  public showMoreFlag: boolean = false;

  constructor(
    public videoService: VideoService,
    public searchVideo: SearchOfVideosService,
    private rout: Router
  ) { }

   public ngOnInit(): void {
    if (this.searchVideo.response$ !== undefined) {
      this.searchVideo.response$.subscribe(data => {
        return this.searchVideo.searchByID(data).subscribe((response: ISearchResponse) => {
          this.searchVideo.videos = response.items;
          this.searchVideo.videos$.next(this.searchVideo.videos);
          this.showMoreFlag = true;
        });
      });
    }
    if (this.searchVideo.videos.length > 0) {
      this.showMoreFlag = true;
    }
  }

  public loadMore(): void {
    const keyword: string = this.searchVideo.keyWord;
    this.searchVideo.searchByKeyword(keyword).subscribe((data: string) => {
      return this.searchVideo.searchByID(data).subscribe((response: ISearchResponse) => {
        const videosIDs: string[] = this.searchVideo.videos.map(video => video.id);
        response.items.forEach(item => {
          if (videosIDs.indexOf(item.id) === -1) {
            this.searchVideo.videos.push(item);
          }
        });
        this.searchVideo.videos$.next(this.searchVideo.videos);
      });
    });
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
