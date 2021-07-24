import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentstudentComponent } from './enrollmentstudent.component';

describe('EnrollmentstudentComponent', () => {
  let component: EnrollmentstudentComponent;
  let fixture: ComponentFixture<EnrollmentstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
