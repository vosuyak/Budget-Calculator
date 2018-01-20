import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStatusComponent } from './side-status.component';

describe('SideStatusComponent', () => {
  let component: SideStatusComponent;
  let fixture: ComponentFixture<SideStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
