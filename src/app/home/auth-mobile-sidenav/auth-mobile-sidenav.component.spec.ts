import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMobileSidenavComponent } from './auth-mobile-sidenav.component';

describe('AuthMobileSidenavComponent', () => {
  let component: AuthMobileSidenavComponent;
  let fixture: ComponentFixture<AuthMobileSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMobileSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMobileSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
