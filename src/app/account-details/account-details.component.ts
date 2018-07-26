import { Component, OnInit, Input} from '@angular/core';
import { AUTH_VIEWS } from '../home/home.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss', '../app.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() changeAuthView: Function;

  public AUTH_VIEWS = AUTH_VIEWS;

  public user: firebase.User = this.authService.getCurrentUser();

  public accountDetailUpdates = {
  	displayName: this.user.displayName;
  }

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  	console.log(this.user);
  }

  getCurrentUserEmail(): string {
  	console.log(this.user);
  	return this.user.email;
  }

  updateAccountDetailsClicked(accountDetailUpdates: any) {
  	this.authService.updateUser(accountDetailUpdates)
  	.then(response => {
      //Success
      console.log('update user successe!!');
      console.log(response);
    })
    .catch(error => {
      //Error
      console.log(error);
    })
  }

}
