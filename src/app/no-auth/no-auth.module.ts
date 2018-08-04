import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NoAuthRoutingModule } from './no-auth-routing.module';
import { NoAuthComponent } from './no-auth.component';
import { NoAuthConfirmEmailComponent } from './no-auth-confirm-email/no-auth-confirm-email.component';
import { NoAuthMobileSidenavComponent } from './no-auth-mobile-sidenav/no-auth-mobile-sidenav.component';
import { NoAuthResetPasswordComponent } from './no-auth-reset-password/no-auth-reset-password.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    NoAuthRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    RecaptchaModule.forRoot(),
    SharedModule
  ],
  declarations: [
    NoAuthComponent,
    NoAuthConfirmEmailComponent,
    NoAuthMobileSidenavComponent,
    NoAuthResetPasswordComponent
  ]
})
export class NoAuthModule { }
