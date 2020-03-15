import { Component } from '@angular/core';
import { AuthenticateService } from './auth/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authenticated: AuthenticateService) {}
}
