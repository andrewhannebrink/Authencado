import { Component, OnInit, Input } from '@angular/core';
import { VIEWS } from '../home/home.component';

@Component({
  selector: 'app-auth-mobile-sidenav',
  templateUrl: './auth-mobile-sidenav.component.html',
  styleUrls: ['./auth-mobile-sidenav.component.css', '../app.component.scss']
})
export class AuthMobileSidenavComponent implements OnInit {

  @Input() changeView: Function;

  constructor() { }

  ngOnInit() {
  }

}
