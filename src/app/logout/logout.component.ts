import { Component, OnInit } from '@angular/core';
import { VIEWS } from '../home/home.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css', '../app.component.scss']
})
export class LogoutComponent implements OnInit {

  public VIEWS = VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
