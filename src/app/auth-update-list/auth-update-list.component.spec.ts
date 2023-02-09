import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUpdateListComponent } from './auth-update-list.component';

describe('AuthUpdateListComponent', () => {
  let component: AuthUpdateListComponent;
  let fixture: ComponentFixture<AuthUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
