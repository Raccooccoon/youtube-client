import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlsInterceptor } from './youtube/services/urls-interceptor';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config: Object = {
  apiKey: 'AIzaSyBQDCdTPisvQovffSD2ryHmOFX7wUCVqTU',
  authDomain: 'client-3-270816.firebaseapp.com',
  databaseURL: 'https://client-3-270816.firebaseio.com',
  projectId: 'youtube-client-3-270816',
  storageBucket: 'youtube-client-3-270816.appspot.com',
  messagingSenderId: '178909627514',
  appId: '1:178909627514:web:50be536fade8761a7627c3',
  measurementId: 'G-ZR086Y7TLY'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
