import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifieldFormArrayComponent } from './multifield-form-array.component';

describe('MultifieldFormArrayComponent', () => {
  let component: MultifieldFormArrayComponent;
  let fixture: ComponentFixture<MultifieldFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultifieldFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultifieldFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
