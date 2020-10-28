import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComapnyComponent } from './post-comapny.component';

describe('PostComapnyComponent', () => {
  let component: PostComapnyComponent;
  let fixture: ComponentFixture<PostComapnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComapnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
