import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css', '../app.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() changeView: Function;

  constructor() { }

  ngOnInit() {
  }

}
