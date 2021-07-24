import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdashboardComponent } from './ldashboard.component';

describe('LdashboardComponent', () => {
  let component: LdashboardComponent;
  let fixture: ComponentFixture<LdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
