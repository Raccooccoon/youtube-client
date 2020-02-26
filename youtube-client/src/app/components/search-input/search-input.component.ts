import { Component } from '@angular/core';
import  Response from '../../../response.json';
import { ISearchResponse } from '../../models/search-response.model';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  public response: ISearchResponse;

  public searchVideos(): void {
    this.response = Response;
    SearchResultsComponent.prototype.getData(this.response);
  }
}
