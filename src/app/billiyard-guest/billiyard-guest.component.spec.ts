import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliyardGuestComponent } from './billiyard-guest.component';

describe('BilliyardGuestComponent', () => {
  let component: BilliyardGuestComponent;
  let fixture: ComponentFixture<BilliyardGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilliyardGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliyardGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
