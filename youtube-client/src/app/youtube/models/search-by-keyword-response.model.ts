/* tslint:disable semicolon */

import { ISearchByKeywordItem } from './search-by-keyword-item.model';

export interface ISearchByKeywordResponse {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: ISearchByKeywordItem[]
}
