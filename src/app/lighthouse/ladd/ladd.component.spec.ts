import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddComponent } from './ladd.component';

describe('LaddComponent', () => {
  let component: LaddComponent;
  let fixture: ComponentFixture<LaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
