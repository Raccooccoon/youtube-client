import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../../auth/services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public visibleFilter: boolean;

  constructor(public authenticated: AuthenticateService) {}

  public ngOnInit(): void {
    this.visibleFilter = false;
  }

  public hideFilter(): void {
    this.visibleFilter = !this.visibleFilter;
  }
}
