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

  logoutClicked() {
    this.authService.logout();
  }

}
