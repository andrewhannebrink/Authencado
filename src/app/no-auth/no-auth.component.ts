import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';



@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.css', '../app.component.css']
})
export class NoAuthComponent implements OnInit {

  public typedEmail: string;
  public typedPassword: string;
  public authenticated: boolean;
  public emailOrPasswordIncorrect: boolean;
  public userAlreadyExists: boolean;
  public signUpError: boolean;
  public invalidEmail: boolean;
  public weakPassword: boolean;
  public emailAlreadyInUse: boolean;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.authenticated = !!user;
      if (!!user) {
        this.router.navigate(['/home']);
      }
    });
  }

  loginClicked() {
    this.signUpError = false;
    this.invalidEmail = false;
    this.weakPassword = false;
    this.emailAlreadyInUse = false;

  	this.authService.login(this.typedEmail, this.typedPassword)
    .then(value => {
      console.log('Nice, it worked!');
    })
    .catch(err => {
      console.log('Something went wrong:',err.message,err.code);
      this.emailOrPasswordIncorrect = true;
    });
  }

  signupClicked() {
    this.emailOrPasswordIncorrect = false;
    this.invalidEmail = false;
    this.weakPassword = false;
    this.signUpError = false;

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
