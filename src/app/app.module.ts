import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule, ROUTES } from './/app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';



import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';




import { environment } from '../environments/environment';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AuthChangePasswordComponent } from './auth-change-password/auth-change-password.component';
import { UpdatePaymentMethodsComponent } from './update-payment-methods/update-payment-methods.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { GreetingDropDownComponent } from './greeting-drop-down/greeting-drop-down.component';
import { AuthMobileSidenavComponent } from './auth-mobile-sidenav/auth-mobile-sidenav.component';




@NgModule({
  declarations: [
    AppComponent,
    NoAuthComponent,
    HomeComponent,
    FooterComponent,
    LogoutComponent,
    AccountDetailsComponent,
    AuthChangePasswordComponent,
    UpdatePaymentMethodsComponent,
    HelpCenterComponent,
    ExploreComponent,
    ProfileComponent,
    GreetingDropDownComponent,
    AuthMobileSidenavComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }