/* tslint:disable max-line-length */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from '../youtube/pages/search-results/search-results.component';
import { DetailedInformationPageComponent } from '../youtube/pages/detailed-information-page/detailed-information-page.component';
import { PageNotFoundComponent } from '../core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent
  },
  {
    path: 'video/:id',
    component: DetailedInformationPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule { }
