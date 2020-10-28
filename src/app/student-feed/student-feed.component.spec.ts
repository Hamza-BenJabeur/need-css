import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeedComponent } from './student-feed.component';

describe('StudentFeedComponent', () => {
  let component: StudentFeedComponent;
  let fixture: ComponentFixture<StudentFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
