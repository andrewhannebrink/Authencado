import { Component, OnInit, Input } from '@angular/core';
import { NO_AUTH_VIEWS } from '../no-auth.component';

@Component({
  selector: 'app-no-auth-mobile-sidenav',
  templateUrl: './no-auth-mobile-sidenav.component.html',
  styleUrls: ['./no-auth-mobile-sidenav.component.css', '../../app.component.scss']
})
export class NoAuthMobileSidenavComponent implements OnInit {

  @Input() changeNoAuthView: Function;
  @Input() sidenavToggle: Function;

  public NO_AUTH_VIEWS = NO_AUTH_VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
