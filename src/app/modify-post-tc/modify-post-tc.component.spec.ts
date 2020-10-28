import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPostTcComponent } from './modify-post-tc.component';

describe('ModifyPostTcComponent', () => {
  let component: ModifyPostTcComponent;
  let fixture: ComponentFixture<ModifyPostTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPostTcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPostTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
