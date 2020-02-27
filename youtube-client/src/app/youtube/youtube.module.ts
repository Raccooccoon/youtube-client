/* tslint:disable max-line-length */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { BorderHighLightDirective } from './directives/border-high-light.directive';
import { SharedModule } from '../shared/shared.module';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { CoreModule } from './../core/core.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    BorderHighLightDirective,
    DetailedInformationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    CoreModule
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    BorderHighLightDirective
  ]
})
export class YoutubeModule { }
