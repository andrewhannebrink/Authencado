import { Component, OnInit, Input} from '@angular/core';
import { AUTH_VIEWS } from '../home/home.component';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.css', '../app.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  public AUTH_VIEWS = AUTH_VIEWS;

  @Input() changeAuthView: Function;

  constructor() { }

  ngOnInit() {
  }

}
