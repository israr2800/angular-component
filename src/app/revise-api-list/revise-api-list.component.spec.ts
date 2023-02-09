import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseApiListComponent } from './revise-api-list.component';

describe('ReviseApiListComponent', () => {
  let component: ReviseApiListComponent;
  let fixture: ComponentFixture<ReviseApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviseApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviseApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
