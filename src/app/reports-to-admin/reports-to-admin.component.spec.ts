import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsToAdminComponent } from './reports-to-admin.component';

describe('ReportsToAdminComponent', () => {
  let component: ReportsToAdminComponent;
  let fixture: ComponentFixture<ReportsToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
