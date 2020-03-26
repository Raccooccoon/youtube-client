/* tslint:disable no-inferrable-types */

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlsInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<Event>> {
    const baseUrl: string = 'https://www.googleapis.com/youtube/v3/';
    const accessToken: string = 'AIzaSyBQDCdTPisvQovffSD2ryHmOFX7wUCVqTU';
    req = req.clone({
      url: baseUrl + req.url + accessToken
    });
    return next.handle(req);
  }
}
