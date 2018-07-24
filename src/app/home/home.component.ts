import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss']
})
export class HomeComponent implements OnInit {

  public VIEWS = VIEWS;

  public currentView: string;

  constructor(public router: Router,
    public authService: AuthService) { }

  changeView(view: string): void {
    if (!!this.VIEWS[view]) {
      this.currentView = this.VIEWS[view];
    } else {
      console.log('View: ' + view + ' does not exist.');
    }
  }

  ngOnInit() { }

}

export const VIEWS = {
  ACCOUNT_DETAILS: 'ACCOUNT_DETAILS',
  EXPLORE: 'EXPLORE',
  HELP: 'HELP',
  LOG_OUT: 'LOG_OUT',
  PASSWORD: 'PASSWORD',
  PAYMENT: 'PAYMENT',
  PROFILE: 'PROFILE'
}
