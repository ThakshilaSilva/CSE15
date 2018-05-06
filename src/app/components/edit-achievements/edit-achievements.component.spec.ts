import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAchievementsComponent } from './edit-achievements.component';

describe('EditAchievementsComponent', () => {
  let component: EditAchievementsComponent;
  let fixture: ComponentFixture<EditAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
