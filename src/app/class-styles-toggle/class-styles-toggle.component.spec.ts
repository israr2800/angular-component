import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStylesToggleComponent } from './class-styles-toggle.component';

describe('ClassStylesToggleComponent', () => {
  let component: ClassStylesToggleComponent;
  let fixture: ComponentFixture<ClassStylesToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassStylesToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStylesToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
