import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBatchEventsComponent } from './edit-batch-events.component';

describe('EditBatchEventsComponent', () => {
  let component: EditBatchEventsComponent;
  let fixture: ComponentFixture<EditBatchEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBatchEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBatchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
