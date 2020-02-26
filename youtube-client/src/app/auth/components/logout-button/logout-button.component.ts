import { Component, DoCheck } from '@angular/core';
import { LogInService } from '../../services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  providers: [LogInService]
})
export class LogoutButtonComponent implements DoCheck {
  public visibleButton: boolean;

  constructor(public log: LogInService, private router: Router) { }

  public ngDoCheck(): void {
    if (this.log.get('UserIsLoggedIn') !== null) {
      this.visibleButton = true;
    }
  }

  public logout(): void {
    this.log.remove('UserName');
    this.log.remove('UserPassword');
    this.log.remove('UserIsLoggedIn');
    this.visibleButton = false;
    this.router.navigate(['']);
  }
}
