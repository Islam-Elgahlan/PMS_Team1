import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTasksComponent } from './m-tasks.component';

describe('MTasksComponent', () => {
  let component: MTasksComponent;
  let fixture: ComponentFixture<MTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MTasksComponent]
    });
    fixture = TestBed.createComponent(MTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
