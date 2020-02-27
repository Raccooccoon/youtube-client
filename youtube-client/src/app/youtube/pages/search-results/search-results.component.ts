import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';
import { VideoService } from '../../services/video.service';
import { LogInService } from '../../../auth/services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public videos: ISearchItem[];

  constructor(
    public videoService: VideoService,
    public checkUser: LogInService,
    private rout: Router
    ) { }

  public ngOnInit(): void {
    if (this.checkUser.get('UserName') === null) {
      this.rout.navigate(['']);
    }
  }

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
