import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeditComponent } from './ledit.component';

describe('LeditComponent', () => {
  let component: LeditComponent;
  let fixture: ComponentFixture<LeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
