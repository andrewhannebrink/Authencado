import { Component, OnInit, Input } from '@angular/core';
import { AUTH_VIEWS } from '../../home/home.component';
import { NO_AUTH_VIEWS } from '../../no-auth/no-auth.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../app.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() currentView: string;
  public AUTH_VIEWS = AUTH_VIEWS;
  public NO_AUTH_VIEWS = NO_AUTH_VIEWS;

  constructor() { }

  showContactFooter(currentView: string): boolean {
  	if (Object.values(NO_AUTH_VIEWS).includes(currentView)) {
  	  return true;
  	} else if (currentView === AUTH_VIEWS.HELP) {
  	  return true;
  	}
  	return false;
  }

  ngOnInit() {
  }

}
