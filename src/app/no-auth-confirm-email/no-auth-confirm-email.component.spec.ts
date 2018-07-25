import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthConfirmEmailComponent } from './no-auth-confirm-email.component';

describe('NoAuthConfirmEmailComponent', () => {
  let component: NoAuthConfirmEmailComponent;
  let fixture: ComponentFixture<NoAuthConfirmEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAuthConfirmEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
