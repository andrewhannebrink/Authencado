import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AUTH_VIEWS } from '../home/home.component';

@Component({
  selector: 'app-greeting-drop-down',
  templateUrl: './greeting-drop-down.component.html',
  styleUrls: ['./greeting-drop-down.component.css', '../app.component.scss']
})
export class GreetingDropDownComponent implements OnInit {

  @Input() changeView: Function;

  public VIEWS = AUTH_VIEWS;

  constructor(private authService: AuthService) { }

  public getCurrentDisplayName() {
    return this.authService.getCurrentUser().displayName;
  }

  ngOnInit() {
  }

}
