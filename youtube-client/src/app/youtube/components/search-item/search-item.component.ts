import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { SearchOfVideosService } from '../../../core/services/search-of-videos.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public video: ISearchItem;
  constructor(public searchedVideos: SearchOfVideosService) {}
}
