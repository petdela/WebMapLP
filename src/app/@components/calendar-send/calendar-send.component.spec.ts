import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSendComponent } from './calendar-send.component';

describe('CalendarSendComponent', () => {
  let component: CalendarSendComponent;
  let fixture: ComponentFixture<CalendarSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
