import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthMobileSidenavComponent } from './no-auth-mobile-sidenav.component';

describe('NoAuthMobileSidenavComponent', () => {
  let component: NoAuthMobileSidenavComponent;
  let fixture: ComponentFixture<NoAuthMobileSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAuthMobileSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthMobileSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
