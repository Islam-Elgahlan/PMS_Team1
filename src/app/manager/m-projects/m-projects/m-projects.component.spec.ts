import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProjectsComponent } from './m-projects.component';

describe('MProjectsComponent', () => {
  let component: MProjectsComponent;
  let fixture: ComponentFixture<MProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MProjectsComponent]
    });
    fixture = TestBed.createComponent(MProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
