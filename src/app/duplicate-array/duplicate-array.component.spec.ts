import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateArrayComponent } from './duplicate-array.component';

describe('DuplicateArrayComponent', () => {
  let component: DuplicateArrayComponent;
  let fixture: ComponentFixture<DuplicateArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
