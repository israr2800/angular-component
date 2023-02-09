import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxValueComponent } from './min-max-value.component';

describe('MinMaxValueComponent', () => {
  let component: MinMaxValueComponent;
  let fixture: ComponentFixture<MinMaxValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
