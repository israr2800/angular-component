import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApiListComponent } from './show-api-list.component';

describe('ShowApiListComponent', () => {
  let component: ShowApiListComponent;
  let fixture: ComponentFixture<ShowApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
