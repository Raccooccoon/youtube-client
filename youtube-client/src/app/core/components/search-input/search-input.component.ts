/* tslint:disable  typedef */

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, skipWhile, distinctUntilChanged } from 'rxjs/operators';
import { SearchOfVideosService } from '../../../youtube/services/search-of-videos.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  public searchText$ = new Subject<string>();
  public withRefresh = false;

  constructor(public searchVideo: SearchOfVideosService) {}

  public search(videoName: string): void {
    this.searchText$.next(videoName);
  }

  public ngOnInit() {
    this.searchVideo.pageToken = '';
    this.searchVideo.response$ = this.searchText$
      .pipe(
        debounceTime(500),
        skipWhile(videoName => videoName.length < 3),
        distinctUntilChanged(),
        switchMap(keyword => this.searchVideo.searchByKeyword(keyword))
      );
  }
}
