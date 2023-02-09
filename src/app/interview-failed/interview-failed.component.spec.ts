import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewFailedComponent } from './interview-failed.component';

describe('InterviewFailedComponent', () => {
  let component: InterviewFailedComponent;
  let fixture: ComponentFixture<InterviewFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
