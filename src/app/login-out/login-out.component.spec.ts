import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOutComponent } from './login-out.component';

describe('LoginOutComponent', () => {
  let component: LoginOutComponent;
  let fixture: ComponentFixture<LoginOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
