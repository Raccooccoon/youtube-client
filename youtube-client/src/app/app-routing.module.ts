import { AuthFormComponent } from './auth/pages/auth-form/auth-form.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { PageNotFoundComponent } from './youtube/pages/page-not-found/page-not-found.component';
import { DetailedInformationPageComponent } from
'./youtube/pages/detailed-information-page/detailed-information-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthFormComponent
  },
  {
    path: 'main',
    component: SearchResultsComponent
  },
  {
    path: 'video/:id',
    component: DetailedInformationPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
