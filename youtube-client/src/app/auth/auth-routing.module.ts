import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from './services/active.guard';

const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'main',
    canActivateChild: [ActiveGuard],
    loadChildren: () => import('../youtube/youtube.module').then(m => m.YoutubeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
