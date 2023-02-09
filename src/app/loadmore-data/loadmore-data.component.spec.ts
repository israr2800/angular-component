import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmoreDataComponent } from './loadmore-data.component';

describe('LoadmoreDataComponent', () => {
  let component: LoadmoreDataComponent;
  let fixture: ComponentFixture<LoadmoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadmoreDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
