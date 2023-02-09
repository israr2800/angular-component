import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveResultComponent } from './custom-directive-result.component';

describe('CustomDirectiveResultComponent', () => {
  let component: CustomDirectiveResultComponent;
  let fixture: ComponentFixture<CustomDirectiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
