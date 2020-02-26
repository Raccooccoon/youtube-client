import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public visibleFilter: boolean;

  public ngOnInit(): void {
    this.visibleFilter = false;
  }

  public hideFilter(): void {
    this.visibleFilter = !this.visibleFilter;
  }
}
