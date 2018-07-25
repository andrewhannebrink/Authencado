import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthResetPasswordComponent } from './no-auth-reset-password.component';

describe('NoAuthResetPasswordComponent', () => {
  let component: NoAuthResetPasswordComponent;
  let fixture: ComponentFixture<NoAuthResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAuthResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
