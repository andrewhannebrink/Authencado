import { Component, OnInit, Input } from '@angular/core';
import { VIEWS } from '../home/home.component';

@Component({
  selector: 'app-greeting-drop-down',
  templateUrl: './greeting-drop-down.component.html',
  styleUrls: ['./greeting-drop-down.component.css', '../app.component.scss']
})
export class GreetingDropDownComponent implements OnInit {

  @Input() changeView: Function;

  public VIEWS = VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
