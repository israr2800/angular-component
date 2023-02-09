import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintKeyvalueComponent } from './print-keyvalue.component';

describe('PrintKeyvalueComponent', () => {
  let component: PrintKeyvalueComponent;
  let fixture: ComponentFixture<PrintKeyvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintKeyvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintKeyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
