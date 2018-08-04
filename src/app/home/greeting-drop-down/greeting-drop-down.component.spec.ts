import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingDropDownComponent } from './greeting-drop-down.component';

describe('GreetingDropDownComponent', () => {
  let component: GreetingDropDownComponent;
  let fixture: ComponentFixture<GreetingDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
