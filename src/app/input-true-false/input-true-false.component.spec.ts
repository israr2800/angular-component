import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTrueFalseComponent } from './input-true-false.component';

describe('InputTrueFalseComponent', () => {
  let component: InputTrueFalseComponent;
  let fixture: ComponentFixture<InputTrueFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTrueFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
