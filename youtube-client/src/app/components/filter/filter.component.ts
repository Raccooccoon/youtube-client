import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() public flagsTransitOne: EventEmitter<(boolean | string)[]> =
  new EventEmitter<(boolean | string)[]>();

  public sortByDate: boolean = false;
  public sortByLikes: boolean = false;
  public sortByKeyWord: string = '';
  public flagsForPipe: (boolean | string)[] = [this.sortByDate, this.sortByLikes, ''];

  public sortByDateFilter(): void {
    this.sortByDate = !this.sortByDate;
    this.flagsForPipe[0] = this.sortByDate;
    this.flagsTransitOne.emit(this.flagsForPipe);
  }

  public sortByLikesFilter(): void {
    this.sortByLikes = !this.sortByLikes;
    this.flagsForPipe[1] = this.sortByLikes;
    this.flagsTransitOne.emit(this.flagsForPipe);
  }

  public sortByKeyWordFilter(): void {
    if (Boolean(this.sortByKeyWord) === true) {
      this.flagsForPipe[2] = inLowerCase(this.sortByKeyWord);
    } else if (Boolean(this.sortByKeyWord) === false) {
      this.flagsForPipe[2] = '';
    }
    this.flagsTransitOne.emit(this.flagsForPipe);

    function inLowerCase (str: string): string {
      return str.toLowerCase();
    }
  }
}
