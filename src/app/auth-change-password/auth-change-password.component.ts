import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.css', '../app.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  @Input() changeView: Function;

  constructor() { }

  ngOnInit() {
  }

}
