import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataonClickComponent } from './input-dataon-click.component';

describe('InputDataonClickComponent', () => {
  let component: InputDataonClickComponent;
  let fixture: ComponentFixture<InputDataonClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataonClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataonClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
