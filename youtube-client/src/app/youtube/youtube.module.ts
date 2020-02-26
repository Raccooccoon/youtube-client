/* tslint:disable max-line-length */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { BorderHighLightDirective } from './directives/border-high-light.directive';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { VideoService } from './services/video.service';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    BorderHighLightDirective,
    PageNotFoundComponent,
    DetailedInformationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    BorderHighLightDirective
  ],
  providers: [
    VideoService
  ]
})
export class YoutubeModule { }
