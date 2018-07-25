import { Component, OnInit, Input} from '@angular/core';
import { VIEWS } from '../home/home.component';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss', '../app.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() changeAuthView: Function;

  public AUTH_VIEWS = VIEWS;

  constructor() { }

  ngOnInit() {
  }

}
