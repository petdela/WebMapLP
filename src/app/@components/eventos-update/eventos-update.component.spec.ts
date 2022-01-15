import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosUpdateComponent } from './eventos-update.component';

describe('EventosUpdateComponent', () => {
  let component: EventosUpdateComponent;
  let fixture: ComponentFixture<EventosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
