import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
      	this.userId = auth.uid
      }
    });
  }

  // This will save the token to the database, triggering the cloud function.
  processPayment(token: any, amount) {
  	const payment = { token, amount};
  	return this.db.list(`/payments/${this.userId}`).push(payment);
  }

}
