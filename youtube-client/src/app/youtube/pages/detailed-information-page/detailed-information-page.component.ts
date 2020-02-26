import { VideoService } from './../../services/video.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {
  public video: ISearchItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VideoService
  ) { }

  public ngOnInit(): void {
    const videoId: string = this.route.snapshot.paramMap.get('id');
    this.video = this.service.getVideo(videoId);
  }

  public goToMainPage(): void {
    this.router.navigate(['/main']);
  }
}
