import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTcComponent } from './profil-tc.component';

describe('ProfilTcComponent', () => {
  let component: ProfilTcComponent;
  let fixture: ComponentFixture<ProfilTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilTcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
