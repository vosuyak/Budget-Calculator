import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyspendingComponent } from './monthlyspending.component';

describe('MonthlyspendingComponent', () => {
  let component: MonthlyspendingComponent;
  let fixture: ComponentFixture<MonthlyspendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyspendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
