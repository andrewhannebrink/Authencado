import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { VIEWS } from '../home/home.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css', '../app.component.scss']
})
export class LogoutComponent implements OnInit {

  @Input() changeView: Function;

  public VIEWS = VIEWS;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
