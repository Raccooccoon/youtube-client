import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { SearchOfVideosService } from '../../../core/services/search-of-videos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {
  public video: ISearchItem;
  public flag: boolean = false;
  public videoID: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SearchOfVideosService,
    private sanitazer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    const videoId: string = this.route.snapshot.paramMap.get('id');
    this.videoID = videoId;
    this.service.searchByID(videoId).subscribe((response) => {
      this.video = response.items[0];
      this.flag = true;
    });
  }

  public goToMainPage(): void {
    this.router.navigate(['/main']);
  }

  public embedURL(): SafeResourceUrl {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoID}`);
  }
}
