import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpodComponent } from './userpod.component';

describe('UserpodComponent', () => {
  let component: UserpodComponent;
  let fixture: ComponentFixture<UserpodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
