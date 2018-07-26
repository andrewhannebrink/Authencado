import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public twitterAuthProvider: any;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  getCurrentUser() {
    //console.log(this.firebaseAuth.auth.currentUser);
    return this.firebaseAuth.auth.currentUser;
  }

  signup(email: string, password: string) {
    if (this.ALLOWED_EMAILS.length === 0 || 
        !!this.ALLOWED_EMAILS.includes(email)) {
      return this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password);
    }
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();

    this.router.navigate(['/']);
  }

  resetPassword(email: string) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  twitterLogin() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  facebookLogin() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  googleLogin() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  hasProviderThatNeedsNoEmailVerification(user: firebase.User): boolean {
    const providers = user.providerData;
    for (let i = 0; i < providers.length; i += 1) {
      if (providers[i].providerId === 'twitter.com') {
        return true;
      } else if ( providers[i].providerId === 'facebook.com') {
        return true;
      }
    }
    return false;
  }

  updateUser(accountDetailUpdates) {
    const updatedDisplayName: string = accountDetailUpdates.displayName;
    return this.getCurrentUser().updateProfile({
      displayName: updatedDisplayName,
      photoURL: ''
    })
  }

  private ALLOWED_EMAILS = [

  ];

}