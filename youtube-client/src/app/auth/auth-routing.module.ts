import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthFormComponent
  },
  {
    path: 'main',
    loadChildren: () => import('../youtube/youtube.module').then(m => m.YoutubeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
