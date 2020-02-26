import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { LogInService } from '../../services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  providers: [LogInService]
})
export class AuthFormComponent implements OnInit {
  public userName: string;
  public userPassword: string;

  constructor(public setUser: LogInService, private router: Router) { }

  public ngOnInit(): void {
    if (this.setUser.get('UserName') !== null) {
      console.log(this.setUser.get('UserName'));
      this.router.navigate(['main']);
    } else {
      this.router.navigate(['']);
    }
    console.log(this.setUser.isLogged);
  }

  public setName(): void {
    this.setUser.set('UserName', this.userName);
  }

  public setPassword(): void {
    this.setUser.set('UserPassword', this.userPassword);
  }

  public login(): void {
    if (this.setUser.get('UserName') !== null && this.setUser.get('UserPassword') !== null) {
      this.router.navigate(['main']);
      this.setUser.set('UserIsLoggedIn', 'true');
    }
  }
}
