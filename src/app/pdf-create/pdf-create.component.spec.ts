import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCreateComponent } from './pdf-create.component';

describe('PdfCreateComponent', () => {
  let component: PdfCreateComponent;
  let fixture: ComponentFixture<PdfCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
