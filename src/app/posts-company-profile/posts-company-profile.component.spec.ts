import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompanyProfileComponent } from './posts-company-profile.component';

describe('PostsCompanyProfileComponent', () => {
  let component: PostsCompanyProfileComponent;
  let fixture: ComponentFixture<PostsCompanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompanyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
