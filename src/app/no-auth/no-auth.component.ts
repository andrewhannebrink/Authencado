import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';



@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss', '../app.component.scss']
})
export class NoAuthComponent implements OnInit {


  public VIEWS = {
    DEMO: 'DEMO',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
    LOG_IN: 'LOG_IN',
    RESET_PASSWORD: 'RESET_PASSWORD',
    SIGN_UP: 'SIGN_UP',
    VERIFY_EMAIL: 'VERIFY_EMAIL'
  };

  public currentView: string = this.VIEWS.SIGN_UP;
  public termsAgreed: boolean;
  public termsNotAgreedError: boolean = false;
  public typedEmail: string;
  public typedPassword: string;
  public typedConfirmPassword: string;
  public passwordsDontMatch: boolean;
  public authenticated: boolean;
  public emailOrPasswordIncorrect: boolean;
  public userAlreadyExists: boolean;
  public signUpError: boolean;
  public invalidEmail: boolean;
  public weakPassword: boolean;
  public emailAlreadyInUse: boolean;
  public emailBlank : boolean;

  public passwordResetInvalidEmail: boolean;
  public userNotFound: boolean;

  public verifyEmailResentSuccessfully: boolean;
  public verifyEmailError: boolean;

  public captchaGood: boolean;
  public captchaError: boolean;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.examineUserThenRedirect(user);
    });
  }

  examineUserThenRedirect(user: firebase.User, waveEmailResend?: boolean): void {
    this.authenticated = !!user;
    if (!!user) {
      if (user.emailVerified || this.authService.hasProviderThatNeedsNoEmailVerification(user)) {
        this.router.navigate(['/home']);
      } else {
        if (!waveEmailResend) {
          user.sendEmailVerification()
          .then(value => {
            this.changeView(this.VIEWS.VERIFY_EMAIL); 
          })
        } else {
          this.changeView(this.VIEWS.VERIFY_EMAIL); 
        }
      }
    }
  }

  resendEmailVerification() {
    this.clearErrors();

    const user = this.authService.getCurrentUser();
    user.sendEmailVerification()
    .then(value => {
      this.verifyEmailResentSuccessfully = true;
    })
    .catch(error => {
      this.verifyEmailError = true;
    })
  }

  changeView(view: string): void {
    if (!!this.VIEWS[view]) {
      this.clearErrors();
      this.currentView = this.VIEWS[view];
    } else {
      console.log('View: ' + view + ' does not exist.');
    }
  }

  clearErrors(): void {
    this.signUpError = false;
    this.invalidEmail = false;
    this.weakPassword = false;
    this.emailAlreadyInUse = false;
    this.emailOrPasswordIncorrect = false;
    this.passwordsDontMatch = false;
    this.emailBlank = false;
    this.termsNotAgreedError = false;

    this.passwordResetInvalidEmail = false;
    this.userNotFound = false;

    this.verifyEmailError = false;
    this.verifyEmailResentSuccessfully = false;
    this.captchaError = false;
    this.captchaGood = false;
  }

  captchaResolved(captchaResponse: string) {
    this.captchaGood = true;
    console.log('captcha resolved!');
  }

  loginClicked() {
    this.clearErrors();

    if (this.typedEmail === undefined || 
        this.typedEmail === '' ||
        this.typedPassword === undefined ||
        this.typedPassword === '') {
      this.emailOrPasswordIncorrect = true;
    }

  	this.authService.login(this.typedEmail, this.typedPassword)
    .then(value => {
      console.log('Nice, it worked!');
      console.log(value);
      // In the case where an unverified user tries to login and is already logged in,
      // the subscription declared in ngInit won't be called, so forward to email verification page using currentUser
      const currentUser = this.authService.getCurrentUser();
      this.examineUserThenRedirect(currentUser, true);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message,err.code);
      this.emailOrPasswordIncorrect = true;
    });
  }

  signupClicked() {
    this.clearErrors();

    if (this.typedEmail === undefined || this.typedEmail === '') {
      this.signUpError = true;
      this.emailBlank = true;
      return;
    }
    if (this.typedPassword === undefined || this.typedPassword.length < 6) {
      this.signUpError = true;
      this.weakPassword = true;
      return
    }
    if (this.typedPassword !== this.typedConfirmPassword) {
      this.signUpError = true;
      this.passwordsDontMatch = true;
      return;
    }
    if (!this.termsAgreed) {
      this.signUpError = true;
      this.termsNotAgreedError = true;
      return;
    }

  	this.authService.signup(this.typedEmail, this.typedPassword)
    .then(value => {
      console.log('Success!', value);

    })
    .catch(err => {
      console.log('Something went wrong:',err.message, err.code);
      this.signUpError = true;
      if (err.code === 'auth/invalid-email') {
        this.invalidEmail = true;
      } else if (err.code === 'auth/weak-password') {
        this.weakPassword = true;
      } else if (err.code === 'auth/email-already-in-use') {
        this.emailAlreadyInUse = true;
      }
    });  

  }

  resetPasswordClicked(): void {
    if (!this.captchaGood) {
      this.captchaError = true;
      return;
    }

    this.clearErrors();

    this.authService.resetPassword(this.typedEmail)
    .then(() => {
      console.log("email sent");
      this.changeView(this.VIEWS.RESET_PASSWORD)
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        this.passwordResetInvalidEmail = true;
      } else if (error.code === 'auth/user-not-found') {
        this.userNotFound = true;
      }
      console.log(error);
    });
  }

  twitterLoginClicked() {
    this.authService.twitterLogin()
    .then(result => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      //var token = result.credential.accessToken;
      //var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }

    facebookLoginClicked() {
    this.authService.facebookLogin()
    .then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error);
    });
  }

  googleLoginClicked() {
    this.authService.googleLogin()
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  logoutClicked() {
    this.authService.logout();
  }

}

