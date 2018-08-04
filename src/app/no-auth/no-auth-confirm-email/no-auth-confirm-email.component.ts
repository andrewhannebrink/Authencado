import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NO_AUTH_VIEWS } from '../no-auth.component';

@Component({
  selector: 'app-no-auth-confirm-email',
  templateUrl: './no-auth-confirm-email.component.html',
  styleUrls: ['./no-auth-confirm-email.component.css', '../../app.component.scss']
})
export class NoAuthConfirmEmailComponent implements OnInit {

  @Input() changeNoAuthView: Function;
  
  public verifyEmailError: boolean;
  public verifyEmailResentSuccessfully: boolean;
  public NO_AUTH_VIEWS = NO_AUTH_VIEWS;

  constructor(public authService: AuthService) { }
  
  clearErrors(): void {
    this.verifyEmailError = false;
    this.verifyEmailResentSuccessfully = false;
  }

  resendEmailVerification() {
    this.clearErrors();

    const user = this.authService.getCurrentUser();
    user.sendEmailVerification()
    .then(value => {
      this.verifyEmailResentSuccessfully = true;
    })
    .catch(error => {
      this.verifyEmailError = true;
    })
  }

  ngOnInit() {
  }

}
