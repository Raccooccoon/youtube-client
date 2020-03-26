/* tslint:disable max-line-length no-inferrable-types no-any */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { ISearchItem } from '../models/search-item.model';
import { ISearchByKeywordResponse } from '../models/search-by-keyword-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchOfVideosService {

  public pageToken: string = '';
  public keyWord: string = '';
  public response$: Observable<any>;
  public videos$: BehaviorSubject<ISearchItem[]> = new BehaviorSubject<ISearchItem[]>([]);
  public videos: ISearchItem[] = [];

  constructor(public http: HttpClient) {}

  public searchByKeyword(keyword: string, maxResults: number = 12): Observable<Object> {
    keyword = keyword.trim().replace(' ', '+');
    this.keyWord = keyword;
    let videosIDs: string = '';
    const videosListURL: string = `search?part=snippet&maxResults=${maxResults}&pageToken=${this.pageToken}&q=${keyword}&key=`;
    return this.http.get(videosListURL)
      .pipe(
        map((response: ISearchByKeywordResponse) => {
          this.pageToken = response.nextPageToken;
          response.items.forEach(item => {
            videosIDs = `${videosIDs}${item.id.videoId},`;
          });
          return videosIDs;
        })
      );
  }

  public searchByID(listOfIDs: string): Observable<ISearchResponse> {
    const videosIDsUrl: string = `videos?part=snippet,statistics&id=${listOfIDs}&key=`;
    return this.http.get(videosIDsUrl)
    .pipe(
      map((response: ISearchResponse) => {
        return response;
      })
    );
  }
}
