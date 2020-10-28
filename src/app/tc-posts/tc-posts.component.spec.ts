import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcPostsComponent } from './tc-posts.component';

describe('TcPostsComponent', () => {
  let component: TcPostsComponent;
  let fixture: ComponentFixture<TcPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
