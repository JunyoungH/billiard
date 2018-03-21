import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueListComponent } from './que-list.component';

describe('QueListComponent', () => {
  let component: QueListComponent;
  let fixture: ComponentFixture<QueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
