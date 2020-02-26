import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';
import { LogInService } from './services/log-in.service';
import { FormsModule } from '@angular/forms';
import { YoutubeModule } from '../youtube/youtube.module';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
    LogoutButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    YoutubeModule
  ],
  exports: [
    AuthComponent,
    AuthFormComponent,
    LogoutButtonComponent
  ],
  providers: [
    LogInService
  ]
})
export class AuthModule { }
