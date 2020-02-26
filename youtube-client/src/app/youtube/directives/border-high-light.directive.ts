import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Directive({
  selector: '[appBorderHighLight]'
})
export class BorderHighLightDirective implements AfterViewInit {
  @Input() public video: ISearchItem;
  @Input() public date: string;

  constructor(private el: ElementRef) {}

  public ngAfterViewInit(): void {
    this.highLite(this.date);
  }

  public highLite(date: string): void {
    const gap: number =
      (new Date().getTime() - new Date(date).getTime()) / 86400000;

    if (gap <= 7) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    }
    if (gap > 7 && gap <= 30) {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    if (gap > 30 && gap <= 180) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    if (gap > 180) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
