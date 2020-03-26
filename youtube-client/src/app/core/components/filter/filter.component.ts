import { Component } from '@angular/core';
import { VideosFilterService } from '../../../youtube/services/videos-filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  constructor(public videoService: VideosFilterService) { }
}
