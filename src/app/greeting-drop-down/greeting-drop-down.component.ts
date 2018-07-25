import { Component, OnInit, Input } from '@angular/core';
import { AUTH_VIEWS } from '../home/home.component';

@Component({
  selector: 'app-greeting-drop-down',
  templateUrl: './greeting-drop-down.component.html',
  styleUrls: ['./greeting-drop-down.component.css', '../app.component.scss']
})
export class GreetingDropDownComponent implements OnInit {

  @Input() changeView: Function;

  public VIEWS = AUTH_VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
