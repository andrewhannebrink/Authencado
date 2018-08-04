import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AccountDetailsComponent } from './account-details/account-details.component';
import { AuthChangePasswordComponent } from './auth-change-password/auth-change-password.component';
import { AuthMobileSidenavComponent } from './auth-mobile-sidenav/auth-mobile-sidenav.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatePaymentMethodsComponent } from './update-payment-methods/update-payment-methods.component';
import { GreetingDropDownComponent } from './greeting-drop-down/greeting-drop-down.component';
import { HomeComponent } from './home.component';

import { PaymentService } from '../payment.service';

@NgModule({
  imports: [
    HomeRoutingModule,
    MatMenuModule,
    MatTabsModule,
    SharedModule
  ],
  declarations: [
    AccountDetailsComponent,
    AuthChangePasswordComponent,
    AuthMobileSidenavComponent,
    GreetingDropDownComponent,
    HelpCenterComponent,
    HomeComponent,
    LogoutComponent,
    ProfileComponent,
    UpdatePaymentMethodsComponent,
  ],
  providers: [
    PaymentService 
  ]
})
export class HomeModule { }
