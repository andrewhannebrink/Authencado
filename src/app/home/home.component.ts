import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss']
})
export class HomeComponent implements OnInit {

  public authenticated: boolean;

  constructor(public router: Router,
    public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (!user ||
          (!user.emailVerified && !this.authService.hasProviderThatNeedsNoEmailVerification(user))) {
        this.authenticated = false;
        this.router.navigate(['/']);
      } else {
        this.authenticated = true;
      }
    });
  }

}
