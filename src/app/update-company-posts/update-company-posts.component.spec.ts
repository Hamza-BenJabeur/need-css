import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyPostsComponent } from './update-company-posts.component';

describe('UpdateCompanyPostsComponent', () => {
  let component: UpdateCompanyPostsComponent;
  let fixture: ComponentFixture<UpdateCompanyPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompanyPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
