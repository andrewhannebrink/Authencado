import { Component, OnInit, Input } from '@angular/core';
import { AUTH_VIEWS } from '../home/home.component';

@Component({
  selector: 'app-auth-mobile-sidenav',
  templateUrl: './auth-mobile-sidenav.component.html',
  styleUrls: ['./auth-mobile-sidenav.component.css', '../app.component.scss']
})
export class AuthMobileSidenavComponent implements OnInit {

  @Input() changeView: Function;
  @Input() sidenavToggle: Function;

  public VIEWS = AUTH_VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
