import { Component, OnInit, Input, HostListener} from '@angular/core';
import { PaymentService } from '../../payment.service';
import { environment } from '../../../environments/environment';

declare var StripeCheckout: any;

@Component({
  selector: 'app-update-payment-methods',
  templateUrl: './update-payment-methods.component.html',
  styleUrls: ['./update-payment-methods.component.scss', '../../app.component.scss']
})
export class UpdatePaymentMethodsComponent implements OnInit {
  
  @Input() changeView: Function;
  handler: any;
  amount: number = 500;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  	this.handler = StripeCheckout.configure({
  	  key: environment.firebase.stripeKey,
  	  image: '',
  	  locale: 'auto',
  	  token: token => {
  	  	this.paymentService.processPayment(token, this.amount)
  	  }
  	})
  }

  handlePayment() {
  	this.handler.open({
  	  name: 'Authencado',
  	  description: 'Donate to Authencado',
  	  amount: this.amount
  	})
  }

  @HostListener('window:popstate')
    onpopstate() {
      this.handler.closer()
    }

}
