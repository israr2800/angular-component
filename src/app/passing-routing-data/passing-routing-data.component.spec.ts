import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingRoutingDataComponent } from './passing-routing-data.component';

describe('PassingRoutingDataComponent', () => {
  let component: PassingRoutingDataComponent;
  let fixture: ComponentFixture<PassingRoutingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassingRoutingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingRoutingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
