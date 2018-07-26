import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';
import { AUTH_VIEWS } from '../home/home.component';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.css', '../app.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  public AUTH_VIEWS = AUTH_VIEWS;

  @Input() changeAuthView: Function;

  public typedOldPassword: string;
  public typedNewPassword: string;
  public typedConfirmNewPassword: string;

  public passwordsDoNotMatchError: boolean;
  public passwordSuccessfullyChanged: boolean;
  public weakPassword: boolean;
  public genericError: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  clearErrors(): void {
  	this.passwordsDoNotMatchError = false;
  	this.passwordSuccessfullyChanged = false;
  	this.weakPassword = false;
  	this.genericError = false;
  }

  updatePasswordClicked() {
  	this.clearErrors();
  	if (this.typedNewPassword !== this.typedConfirmNewPassword) {
  	  this.passwordsDoNotMatchError = true;
  	  return;
  	} else if (!this.typedNewPassword) {
  	  this.weakPassword = true;
  	  return;
  	}

  	this.authService.authChangePassword(this.typedNewPassword)
  	.then(value => {
  	  this.passwordSuccessfullyChanged = true;
  	})
  	.catch(error => {
  	  if (error.code === 'auth/weak-password') {
  	  	this.weakPassword = true;
  	  } else if (error.code === 'auth/requires-recent-login') {
  	  	const currentUser = this.authService.getCurrentUser();
  	  	if (!currentUser.email) {
  	  	  // user does not user email/pw to sign in (uses social instead)
  	  	  this.genericError = true;
  	  	  return;
  	  	}
        this.authService.reauthenticateUser(currentUser.email, this.typedOldPassword)
        .then(value => {
          console.log('success reauthenticating');
          console.log(value);
        })
        .catch(error => {
          this.genericError = true;
          console.log(error);
        });

  	  } else {
  	  	console.log(error.code);
  	  	this.genericError = true;
  	  }
  	});
  	
  }

  cancelClicked() {
  	this.clearErrors();
  	this.changeAuthView(AUTH_VIEWS.EXPLORE)
  }

}
