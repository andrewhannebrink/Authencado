import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-payment-methods',
  templateUrl: './update-payment-methods.component.html',
  styleUrls: ['./update-payment-methods.component.css', '../app.component.scss']
})
export class UpdatePaymentMethodsComponent implements OnInit {
  
  @Input() changeView: Function;

  constructor() { }

  ngOnInit() {
  }

}
