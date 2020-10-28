import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWeeklyUpdateComponent } from './admin-weekly-update.component';

describe('AdminWeeklyUpdateComponent', () => {
  let component: AdminWeeklyUpdateComponent;
  let fixture: ComponentFixture<AdminWeeklyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWeeklyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeeklyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
