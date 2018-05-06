import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcaEventsComponent } from './edit-aca-events.component';

describe('EditAcaEventsComponent', () => {
  let component: EditAcaEventsComponent;
  let fixture: ComponentFixture<EditAcaEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcaEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
