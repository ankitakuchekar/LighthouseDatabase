import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmenteditComponent } from './enrollmentedit.component';

describe('EnrollmenteditComponent', () => {
  let component: EnrollmenteditComponent;
  let fixture: ComponentFixture<EnrollmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmenteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
