import { Component, Input } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() public main: (boolean | string)[];
  public videos: ISearchItem[];

  public getData(data: ISearchResponse): void {
    this.videos = data.items;
  }

  public filterBydateFlag(): (boolean | string) {
    if (this.main === undefined) {
      return false;
    } else {
      return this.main[0];
    }
  }

  public filterByViewsFlag(): (boolean | string) {
    if (this.main === undefined) {
      return false;
    } else {
      return this.main[1];
    }
  }

  public filterByValueFlag(): (boolean | string) {
    if (this.main === undefined) {
      return false;
    } else {
      return this.main[2];
    }
  }
}
