import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangePasswordComponent } from './request-change-password.component';

describe('RequestChangePasswordComponent', () => {
  let component: RequestChangePasswordComponent;
  let fixture: ComponentFixture<RequestChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestChangePasswordComponent]
    });
    fixture = TestBed.createComponent(RequestChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
