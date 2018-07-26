import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	/*const currentUser = this.auth.getCurrentUser();
    if (!!currentUser) {
    	if (currentUser.emailVerified || 
    		  this.auth.hasProviderThatNeedsNoEmailVerification(currentUser)) {
        return true;
      }
    }
    console.log('access denied!');
    this.router.navigate(['/'])
    return false;*/
      return this.auth.canActivateAuthRoutes();

  }
}