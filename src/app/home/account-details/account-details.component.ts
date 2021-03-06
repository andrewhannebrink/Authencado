import { Component, OnInit, Input} from '@angular/core';
import { AUTH_VIEWS } from '../../home/home.component';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss', '../../app.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() changeAuthView: Function;

  public AUTH_VIEWS = AUTH_VIEWS;

  public user: firebase.User = this.authService.getCurrentUser();

  public accountDetailsSuccessfullyUpdated: boolean;
  public genericError: boolean;

  public emojiInInitialsCircle: boolean = false;

  public accountDetailUpdates = {
    // get display name from firebase
  	displayName: this.user.displayName 
  }

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  }

  clearErrors(): void {
    this.accountDetailsSuccessfullyUpdated = false;
    this.genericError = false;
  }

  getCurrentUserEmail(): string {
  	return this.user.email;
  }

  updateAccountDetailsClicked(accountDetailUpdates: any) {
  	this.authService.updateUser(accountDetailUpdates)
  	.then(response => {
      this.accountDetailsSuccessfullyUpdated = true;

    })
    .catch(error => {
      console.log(error);
      this.genericError = true;
    })
  }

  // TODO: this function probably still breaks in the far reaches of 
  // corner-case regex land
  getProfileInitials(): string {
    if (!this.user.displayName) {
      return '??';
    }
    let splitName = this.user.displayName.split(/_| |-|\./);
    //remove excess blank strings
    while (splitName[0] === '') {
      splitName = splitName.slice(1);
    }
    while (splitName[1] === '') {
      splitName.splice(1, 1);
    }

    // Detect for names with first character emojis
    const nonEmojiChars = /[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\~\[\]{}_+=|\\-]/g;
    const emojiChars = /[^a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\~\[\]{}_+=|\\-]/g;
    if (splitName[0].indexOf('\u200D') > 1) {
      //console.log('ZWIDGE');
      this.emojiInInitialsCircle = true;
      return splitName[0].toUpperCase().replace(nonEmojiChars, '');
    }
    if (splitName[0].match(emojiChars)) {
      //console.log('symbol char matched in first portion');
      this.emojiInInitialsCircle = true;
      return splitName[0].toUpperCase().replace(nonEmojiChars, '').slice(0, 2);
    }
    if (!!splitName[1] && splitName[1].match(emojiChars)) {
      this.emojiInInitialsCircle = false;
      //console.log('symbol char matched in second portion');
      return splitName[0].slice(0, 2).toUpperCase();
    }
    if (splitName.length >= 2) {
      this.emojiInInitialsCircle = false;
      return (splitName[0][0] + splitName[1][0]).toUpperCase();
    } else if (splitName.length === 1 && splitName[0].length >= 2) {
      this.emojiInInitialsCircle = false;
      return (splitName[0][0] + splitName[0][1]).toUpperCase();
    }
    return '??';
  }

}
