import { Component, OnInit, Input } from '@angular/core';
import { NO_AUTH_VIEWS } from '../no-auth/no-auth.component';

@Component({
  selector: 'app-no-auth-reset-password',
  templateUrl: './no-auth-reset-password.component.html',
  styleUrls: ['./no-auth-reset-password.component.css', '../app.component.scss']
})
export class NoAuthResetPasswordComponent implements OnInit {

  @Input() changeNoAuthView: Function;
  
  public NO_AUTH_VIEWS = NO_AUTH_VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
