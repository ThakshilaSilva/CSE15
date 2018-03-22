import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchEventsComponent } from './batch-events.component';

describe('BatchEventsComponent', () => {
  let component: BatchEventsComponent;
  let fixture: ComponentFixture<BatchEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
