import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';
import { LogInService } from './services/log-in.service';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    AuthFormComponent
  ],
  providers: [
    LogInService
  ]
})
export class AuthModule { }
