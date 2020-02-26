import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public flagsTransitTwo: EventEmitter<(boolean | string)[]> =
  new EventEmitter<(boolean | string)[]>();

  public flagsForPipe: (boolean | string)[];
  public visibleFilter: boolean;

  public ngOnInit(): void {
    this.visibleFilter = false;
  }

  public hideFilter(): void {
    this.visibleFilter = !this.visibleFilter;
  }

  public composeFlags(arr: (boolean | string)[]): void {
    this.flagsForPipe = arr;
    this.flagsTransitTwo.emit(this.flagsForPipe);
  }
}
