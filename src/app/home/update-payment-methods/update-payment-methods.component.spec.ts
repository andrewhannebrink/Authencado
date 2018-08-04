import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentMethodsComponent } from './update-payment-methods.component';

describe('UpdatePaymentMethodsComponent', () => {
  let component: UpdatePaymentMethodsComponent;
  let fixture: ComponentFixture<UpdatePaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaymentMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
