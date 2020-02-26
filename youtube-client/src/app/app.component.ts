import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public flags: (boolean | string)[];

  public transportPipe(arr: (boolean | string)[]): void {
    this.flags = arr;
  }
}
