import { Component } from '@angular/core';
import { VideoService } from '../../../youtube/services/video.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  constructor(public videoService: VideoService) { }
}
