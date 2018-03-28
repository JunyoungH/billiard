import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInsertComponent } from './time-insert.component';

describe('TimeInsertComponent', () => {
  let component: TimeInsertComponent;
  let fixture: ComponentFixture<TimeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
