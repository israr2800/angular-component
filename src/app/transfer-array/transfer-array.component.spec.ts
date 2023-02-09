import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferArrayComponent } from './transfer-array.component';

describe('TransferArrayComponent', () => {
  let component: TransferArrayComponent;
  let fixture: ComponentFixture<TransferArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
