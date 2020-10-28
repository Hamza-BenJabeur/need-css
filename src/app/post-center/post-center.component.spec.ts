import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCenterComponent } from './post-center.component';

describe('PostCenterComponent', () => {
  let component: PostCenterComponent;
  let fixture: ComponentFixture<PostCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
