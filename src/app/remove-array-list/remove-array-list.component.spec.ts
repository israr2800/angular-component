import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveArrayListComponent } from './remove-array-list.component';

describe('RemoveArrayListComponent', () => {
  let component: RemoveArrayListComponent;
  let fixture: ComponentFixture<RemoveArrayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveArrayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveArrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
