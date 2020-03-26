import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivateChild {
  constructor(
    private authenticate: AuthenticateService,
    private router: Router
  ) {}

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
      return this.authenticate.user$
        .pipe(
          take(1),
          map(user => !!user),
          tap(loggedIn => {
            if (!loggedIn) {
              this.router.navigate(['/']);
            }
          })
        );
    }
  }
