import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliyardComponent } from './billiyard.component';

describe('BilliyardComponent', () => {
  let component: BilliyardComponent;
  let fixture: ComponentFixture<BilliyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilliyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
