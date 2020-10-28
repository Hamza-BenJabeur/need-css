import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCenterEditComponent } from './training-center-edit.component';

describe('TrainingCenterEditComponent', () => {
  let component: TrainingCenterEditComponent;
  let fixture: ComponentFixture<TrainingCenterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCenterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCenterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
