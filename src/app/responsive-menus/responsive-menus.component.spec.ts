import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveMenusComponent } from './responsive-menus.component';

describe('ResponsiveMenusComponent', () => {
  let component: ResponsiveMenusComponent;
  let fixture: ComponentFixture<ResponsiveMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
